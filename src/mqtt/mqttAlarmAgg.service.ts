import { Injectable } from '@nestjs/common';
import { MqttClient, connect } from 'mqtt';

@Injectable()
export class MqttAlarmAggService {
  public readonly mqtt: MqttClient;
  private parentTopic: string;
  private childTopics: string[];
  private statusMap: Map<string, number>;
  private alarmStatus: boolean;
  constructor() {
    this.parentTopic = 'site/123/photovoltaic/skidControlUnits/01A/status';
    this.childTopics = [
      'site/123/photovoltaic/skidControlUnits/01A/inverters/1/status',
      'site/123/photovoltaic/skidControlUnits/01A/inverters/2/status',
      'site/123/photovoltaic/skidControlUnits/01A/inverters/3/status',
      'site/123/photovoltaic/skidControlUnits/01A/inverters/4/status',
      'site/123/photovoltaic/skidControlUnits/01A/inverters/5/status',
      'site/123/photovoltaic/skidControlUnits/01A/inverters/6/status',
    ];
    this.statusMap = new Map<string, number>();
    this.alarmStatus = true;
    this.mqtt = connect('mqtt://localhost:1883', {
      clean: true,
      connectTimeout: 4000,
      username: null,
      password: null,
      reconnectPeriod: 1000,
    });

    this.mqtt.on('connect', () => {
      this.mqtt.subscribe(this.parentTopic, { qos: 1 });
      // console.log('Subscribed to parent topic' + this.parentTopic);
      this.childTopics.forEach((topic) => {
        this.mqtt.subscribe(topic, { qos: 1 });
        // console.log('Subscribed to topic ' + topic);
      });
      console.log('Connected to MQTT server');
    });

    this.mqtt.on('message', (topic, message) => {
      //we want to return because the parent topic is now 1
      const messageValue = parseInt(message.toString());
      if (messageValue === 0 || messageValue === 1) {
        console
          .log
          // `New message recieved from topic: ${topic}, the message said: ${messageValue}`,
          ();
        if (this.childTopics.includes(topic)) {
          this.statusMap[topic] = messageValue;
        } else if (topic === this.parentTopic) {
          return;
        }
        this.checkStatus();
        return;
      }
      // console.log('Invalid message recieved, 1 or 0 are the only valid values');
    });

    this.mqtt.on('error', (error) => {
      console.error('MQTT error:', error);
    });

    this.mqtt.on('close', () => {
      console.log('MQTT connection closed');
    });
  }

  public checkStatus(): void {
    this.alarmStatus = this.childTopics.every(
      (topic) => this.statusMap[topic] === 1,
    );
    if (this.alarmStatus) {
      this.mqtt.publish(this.parentTopic, '1');
    } else {
      this.mqtt.publish(this.parentTopic, '0');
    }
  }
}
