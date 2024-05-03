import { Module } from '@nestjs/common';
import { MqttAlarmAggService } from './mqttAlarmAgg.service';

@Module({ providers: [MqttAlarmAggService], exports: [MqttAlarmAggService] })
export class MqttModule {}
