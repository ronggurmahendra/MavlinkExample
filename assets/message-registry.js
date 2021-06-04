"use strict";
exports.__esModule = true;
exports.messageRegistry = void 0;
var heartbeat_1 = require("./messages/heartbeat");
var sys_status_1 = require("./messages/sys-status");
var system_time_1 = require("./messages/system-time");
var ping_1 = require("./messages/ping");
var change_operator_control_1 = require("./messages/change-operator-control");
var change_operator_control_ack_1 = require("./messages/change-operator-control-ack");
var auth_key_1 = require("./messages/auth-key");
var set_mode_1 = require("./messages/set-mode");
var param_request_read_1 = require("./messages/param-request-read");
var param_request_list_1 = require("./messages/param-request-list");
var param_value_1 = require("./messages/param-value");
var param_set_1 = require("./messages/param-set");
var gps_raw_int_1 = require("./messages/gps-raw-int");
var gps_status_1 = require("./messages/gps-status");
var scaled_imu_1 = require("./messages/scaled-imu");
var raw_imu_1 = require("./messages/raw-imu");
var raw_pressure_1 = require("./messages/raw-pressure");
var scaled_pressure_1 = require("./messages/scaled-pressure");
var attitude_1 = require("./messages/attitude");
var attitude_quaternion_1 = require("./messages/attitude-quaternion");
var local_position_ned_1 = require("./messages/local-position-ned");
var global_position_int_1 = require("./messages/global-position-int");
var rc_channels_scaled_1 = require("./messages/rc-channels-scaled");
var rc_channels_raw_1 = require("./messages/rc-channels-raw");
var servo_output_raw_1 = require("./messages/servo-output-raw");
var mission_request_partial_list_1 = require("./messages/mission-request-partial-list");
var mission_write_partial_list_1 = require("./messages/mission-write-partial-list");
var mission_item_1 = require("./messages/mission-item");
var mission_request_1 = require("./messages/mission-request");
var mission_set_current_1 = require("./messages/mission-set-current");
var mission_current_1 = require("./messages/mission-current");
var mission_request_list_1 = require("./messages/mission-request-list");
var mission_count_1 = require("./messages/mission-count");
var mission_clear_all_1 = require("./messages/mission-clear-all");
var mission_item_reached_1 = require("./messages/mission-item-reached");
var mission_ack_1 = require("./messages/mission-ack");
var set_gps_global_origin_1 = require("./messages/set-gps-global-origin");
var gps_global_origin_1 = require("./messages/gps-global-origin");
var param_map_rc_1 = require("./messages/param-map-rc");
var mission_request_int_1 = require("./messages/mission-request-int");
var safety_set_allowed_area_1 = require("./messages/safety-set-allowed-area");
var safety_allowed_area_1 = require("./messages/safety-allowed-area");
var attitude_quaternion_cov_1 = require("./messages/attitude-quaternion-cov");
var nav_controller_output_1 = require("./messages/nav-controller-output");
var global_position_int_cov_1 = require("./messages/global-position-int-cov");
var local_position_ned_cov_1 = require("./messages/local-position-ned-cov");
var rc_channels_1 = require("./messages/rc-channels");
var request_data_stream_1 = require("./messages/request-data-stream");
var data_stream_1 = require("./messages/data-stream");
var manual_control_1 = require("./messages/manual-control");
var rc_channels_override_1 = require("./messages/rc-channels-override");
var mission_item_int_1 = require("./messages/mission-item-int");
var vfr_hud_1 = require("./messages/vfr-hud");
var command_int_1 = require("./messages/command-int");
var command_long_1 = require("./messages/command-long");
var command_ack_1 = require("./messages/command-ack");
var manual_setpoint_1 = require("./messages/manual-setpoint");
var set_attitude_target_1 = require("./messages/set-attitude-target");
var attitude_target_1 = require("./messages/attitude-target");
var set_position_target_local_ned_1 = require("./messages/set-position-target-local-ned");
var position_target_local_ned_1 = require("./messages/position-target-local-ned");
var set_position_target_global_int_1 = require("./messages/set-position-target-global-int");
var position_target_global_int_1 = require("./messages/position-target-global-int");
var local_position_ned_system_global_offset_1 = require("./messages/local-position-ned-system-global-offset");
var hil_state_1 = require("./messages/hil-state");
var hil_controls_1 = require("./messages/hil-controls");
var hil_rc_inputs_raw_1 = require("./messages/hil-rc-inputs-raw");
var hil_actuator_controls_1 = require("./messages/hil-actuator-controls");
var optical_flow_1 = require("./messages/optical-flow");
var global_vision_position_estimate_1 = require("./messages/global-vision-position-estimate");
var vision_position_estimate_1 = require("./messages/vision-position-estimate");
var vision_speed_estimate_1 = require("./messages/vision-speed-estimate");
var vicon_position_estimate_1 = require("./messages/vicon-position-estimate");
var highres_imu_1 = require("./messages/highres-imu");
var optical_flow_rad_1 = require("./messages/optical-flow-rad");
var hil_sensor_1 = require("./messages/hil-sensor");
var sim_state_1 = require("./messages/sim-state");
var radio_status_1 = require("./messages/radio-status");
var file_transfer_protocol_1 = require("./messages/file-transfer-protocol");
var timesync_1 = require("./messages/timesync");
var camera_trigger_1 = require("./messages/camera-trigger");
var hil_gps_1 = require("./messages/hil-gps");
var hil_optical_flow_1 = require("./messages/hil-optical-flow");
var hil_state_quaternion_1 = require("./messages/hil-state-quaternion");
var scaled_imu2_1 = require("./messages/scaled-imu2");
var log_request_list_1 = require("./messages/log-request-list");
var log_entry_1 = require("./messages/log-entry");
var log_request_data_1 = require("./messages/log-request-data");
var log_data_1 = require("./messages/log-data");
var log_erase_1 = require("./messages/log-erase");
var log_request_end_1 = require("./messages/log-request-end");
var gps_inject_data_1 = require("./messages/gps-inject-data");
var gps2_raw_1 = require("./messages/gps2-raw");
var power_status_1 = require("./messages/power-status");
var serial_control_1 = require("./messages/serial-control");
var gps_rtk_1 = require("./messages/gps-rtk");
var gps2_rtk_1 = require("./messages/gps2-rtk");
var scaled_imu3_1 = require("./messages/scaled-imu3");
var data_transmission_handshake_1 = require("./messages/data-transmission-handshake");
var encapsulated_data_1 = require("./messages/encapsulated-data");
var distance_sensor_1 = require("./messages/distance-sensor");
var terrain_request_1 = require("./messages/terrain-request");
var terrain_data_1 = require("./messages/terrain-data");
var terrain_check_1 = require("./messages/terrain-check");
var terrain_report_1 = require("./messages/terrain-report");
var scaled_pressure2_1 = require("./messages/scaled-pressure2");
var att_pos_mocap_1 = require("./messages/att-pos-mocap");
var set_actuator_control_target_1 = require("./messages/set-actuator-control-target");
var actuator_control_target_1 = require("./messages/actuator-control-target");
var altitude_1 = require("./messages/altitude");
var resource_request_1 = require("./messages/resource-request");
var scaled_pressure3_1 = require("./messages/scaled-pressure3");
var follow_target_1 = require("./messages/follow-target");
var control_system_state_1 = require("./messages/control-system-state");
var battery_status_1 = require("./messages/battery-status");
var autopilot_version_1 = require("./messages/autopilot-version");
var landing_target_1 = require("./messages/landing-target");
var estimator_status_1 = require("./messages/estimator-status");
var wind_cov_1 = require("./messages/wind-cov");
var gps_input_1 = require("./messages/gps-input");
var gps_rtcm_data_1 = require("./messages/gps-rtcm-data");
var vibration_1 = require("./messages/vibration");
var home_position_1 = require("./messages/home-position");
var set_home_position_1 = require("./messages/set-home-position");
var message_interval_1 = require("./messages/message-interval");
var extended_sys_state_1 = require("./messages/extended-sys-state");
var adsb_vehicle_1 = require("./messages/adsb-vehicle");
var collision_1 = require("./messages/collision");
var v2_extension_1 = require("./messages/v2-extension");
var memory_vect_1 = require("./messages/memory-vect");
var debug_vect_1 = require("./messages/debug-vect");
var named_value_float_1 = require("./messages/named-value-float");
var named_value_int_1 = require("./messages/named-value-int");
var statustext_1 = require("./messages/statustext");
var debug_1 = require("./messages/debug");
var setup_signing_1 = require("./messages/setup-signing");
var button_change_1 = require("./messages/button-change");
var play_tune_1 = require("./messages/play-tune");
exports.messageRegistry = [
    [0, heartbeat_1.Heartbeat],
    [1, sys_status_1.SysStatus],
    [2, system_time_1.SystemTime],
    [4, ping_1.Ping],
    [5, change_operator_control_1.ChangeOperatorControl],
    [6, change_operator_control_ack_1.ChangeOperatorControlAck],
    [7, auth_key_1.AuthKey],
    [11, set_mode_1.SetMode],
    [20, param_request_read_1.ParamRequestRead],
    [21, param_request_list_1.ParamRequestList],
    [22, param_value_1.ParamValue],
    [23, param_set_1.ParamSet],
    [24, gps_raw_int_1.GpsRawInt],
    [25, gps_status_1.GpsStatus],
    [26, scaled_imu_1.ScaledImu],
    [27, raw_imu_1.RawImu],
    [28, raw_pressure_1.RawPressure],
    [29, scaled_pressure_1.ScaledPressure],
    [30, attitude_1.Attitude],
    [31, attitude_quaternion_1.AttitudeQuaternion],
    [32, local_position_ned_1.LocalPositionNed],
    [33, global_position_int_1.GlobalPositionInt],
    [34, rc_channels_scaled_1.RcChannelsScaled],
    [35, rc_channels_raw_1.RcChannelsRaw],
    [36, servo_output_raw_1.ServoOutputRaw],
    [37, mission_request_partial_list_1.MissionRequestPartialList],
    [38, mission_write_partial_list_1.MissionWritePartialList],
    [39, mission_item_1.MissionItem],
    [40, mission_request_1.MissionRequest],
    [41, mission_set_current_1.MissionSetCurrent],
    [42, mission_current_1.MissionCurrent],
    [43, mission_request_list_1.MissionRequestList],
    [44, mission_count_1.MissionCount],
    [45, mission_clear_all_1.MissionClearAll],
    [46, mission_item_reached_1.MissionItemReached],
    [47, mission_ack_1.MissionAck],
    [48, set_gps_global_origin_1.SetGpsGlobalOrigin],
    [49, gps_global_origin_1.GpsGlobalOrigin],
    [50, param_map_rc_1.ParamMapRc],
    [51, mission_request_int_1.MissionRequestInt],
    [54, safety_set_allowed_area_1.SafetySetAllowedArea],
    [55, safety_allowed_area_1.SafetyAllowedArea],
    [61, attitude_quaternion_cov_1.AttitudeQuaternionCov],
    [62, nav_controller_output_1.NavControllerOutput],
    [63, global_position_int_cov_1.GlobalPositionIntCov],
    [64, local_position_ned_cov_1.LocalPositionNedCov],
    [65, rc_channels_1.RcChannels],
    [66, request_data_stream_1.RequestDataStream],
    [67, data_stream_1.DataStream],
    [69, manual_control_1.ManualControl],
    [70, rc_channels_override_1.RcChannelsOverride],
    [73, mission_item_int_1.MissionItemInt],
    [74, vfr_hud_1.VfrHud],
    [75, command_int_1.CommandInt],
    [76, command_long_1.CommandLong],
    [77, command_ack_1.CommandAck],
    [81, manual_setpoint_1.ManualSetpoint],
    [82, set_attitude_target_1.SetAttitudeTarget],
    [83, attitude_target_1.AttitudeTarget],
    [84, set_position_target_local_ned_1.SetPositionTargetLocalNed],
    [85, position_target_local_ned_1.PositionTargetLocalNed],
    [86, set_position_target_global_int_1.SetPositionTargetGlobalInt],
    [87, position_target_global_int_1.PositionTargetGlobalInt],
    [89, local_position_ned_system_global_offset_1.LocalPositionNedSystemGlobalOffset],
    [90, hil_state_1.HilState],
    [91, hil_controls_1.HilControls],
    [92, hil_rc_inputs_raw_1.HilRcInputsRaw],
    [93, hil_actuator_controls_1.HilActuatorControls],
    [100, optical_flow_1.OpticalFlow],
    [101, global_vision_position_estimate_1.GlobalVisionPositionEstimate],
    [102, vision_position_estimate_1.VisionPositionEstimate],
    [103, vision_speed_estimate_1.VisionSpeedEstimate],
    [104, vicon_position_estimate_1.ViconPositionEstimate],
    [105, highres_imu_1.HighresImu],
    [106, optical_flow_rad_1.OpticalFlowRad],
    [107, hil_sensor_1.HilSensor],
    [108, sim_state_1.SimState],
    [109, radio_status_1.RadioStatus],
    [110, file_transfer_protocol_1.FileTransferProtocol],
    [111, timesync_1.Timesync],
    [112, camera_trigger_1.CameraTrigger],
    [113, hil_gps_1.HilGps],
    [114, hil_optical_flow_1.HilOpticalFlow],
    [115, hil_state_quaternion_1.HilStateQuaternion],
    [116, scaled_imu2_1.ScaledImu2],
    [117, log_request_list_1.LogRequestList],
    [118, log_entry_1.LogEntry],
    [119, log_request_data_1.LogRequestData],
    [120, log_data_1.LogData],
    [121, log_erase_1.LogErase],
    [122, log_request_end_1.LogRequestEnd],
    [123, gps_inject_data_1.GpsInjectData],
    [124, gps2_raw_1.Gps2Raw],
    [125, power_status_1.PowerStatus],
    [126, serial_control_1.SerialControl],
    [127, gps_rtk_1.GpsRtk],
    [128, gps2_rtk_1.Gps2Rtk],
    [129, scaled_imu3_1.ScaledImu3],
    [130, data_transmission_handshake_1.DataTransmissionHandshake],
    [131, encapsulated_data_1.EncapsulatedData],
    [132, distance_sensor_1.DistanceSensor],
    [133, terrain_request_1.TerrainRequest],
    [134, terrain_data_1.TerrainData],
    [135, terrain_check_1.TerrainCheck],
    [136, terrain_report_1.TerrainReport],
    [137, scaled_pressure2_1.ScaledPressure2],
    [138, att_pos_mocap_1.AttPosMocap],
    [139, set_actuator_control_target_1.SetActuatorControlTarget],
    [140, actuator_control_target_1.ActuatorControlTarget],
    [141, altitude_1.Altitude],
    [142, resource_request_1.ResourceRequest],
    [143, scaled_pressure3_1.ScaledPressure3],
    [144, follow_target_1.FollowTarget],
    [146, control_system_state_1.ControlSystemState],
    [147, battery_status_1.BatteryStatus],
    [148, autopilot_version_1.AutopilotVersion],
    [149, landing_target_1.LandingTarget],
    [230, estimator_status_1.EstimatorStatus],
    [231, wind_cov_1.WindCov],
    [232, gps_input_1.GpsInput],
    [233, gps_rtcm_data_1.GpsRtcmData],
    [241, vibration_1.Vibration],
    [242, home_position_1.HomePosition],
    [243, set_home_position_1.SetHomePosition],
    [244, message_interval_1.MessageInterval],
    [245, extended_sys_state_1.ExtendedSysState],
    [246, adsb_vehicle_1.AdsbVehicle],
    [247, collision_1.Collision],
    [248, v2_extension_1.V2Extension],
    [249, memory_vect_1.MemoryVect],
    [250, debug_vect_1.DebugVect],
    [251, named_value_float_1.NamedValueFloat],
    [252, named_value_int_1.NamedValueInt],
    [253, statustext_1.Statustext],
    [254, debug_1.Debug],
    [256, setup_signing_1.SetupSigning],
    [257, button_change_1.ButtonChange],
    [258, play_tune_1.PlayTune],
];
