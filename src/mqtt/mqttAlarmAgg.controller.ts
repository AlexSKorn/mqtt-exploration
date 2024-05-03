import { MqttAlarmAggService } from './mqttAlarmAgg.service';
import { Controller } from '@nestjs/common';

@Controller()
export class MqttAlarmAggController {
  constructor(private readonly mqttAlarmService: MqttAlarmAggService) {}
}
