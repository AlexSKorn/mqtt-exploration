import { Module } from '@nestjs/common';
import { MqttModule } from './mqtt/mqttAlarmAgg.module';
import { MqttAlarmAggController } from './mqtt/mqttAlarmAgg.controller';
import { MqttAlarmAggService } from './mqtt/mqttAlarmAgg.service';

@Module({
  imports: [MqttModule],
  controllers: [MqttAlarmAggController],
  providers: [MqttAlarmAggService],
})
export class AppModule {}
