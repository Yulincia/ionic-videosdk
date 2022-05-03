import { Component, OnInit } from '@angular/core';
import { VideoSDKMeeting } from '@videosdk.live/rtc-js-prebuilt';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  apiKey = environment.VIDEOSDK_API_KEY;

  constructor() { }

  ngOnInit(): void {
    this.launchCall();
  }

  private launchCall() {

    const config = {
      name: `user name`,
      meetingId: 'course-id',
      apiKey: this.apiKey,

      debug: true,

      containerId: 'call',//null,
      redirectOnLeave: 'https://www.videosdk.live/',

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,

      chatEnabled: true,
      screenShareEnabled: true,
      pollEnabled: true,
      whiteboardEnabled: true,
      raiseHandEnabled: false,

      recordingEnabled: false,
      recordingEnabledByDefault: false,
      recordingWebhookUrl: 'https://www.videosdk.live/callback',
      recordingAWSDirPath: `/meeting-recordings/`, // automatically save recording in this s3 path

      // // brandingEnabled: false,
      // // brandLogoURL: 'assets/logo.svg',
      // // brandName: 'ViteUnProf',
      // branding: {
      //   enabled: false,
      //   logoURL:
      //     "https://www.viteunprof.com/_next/image?url=https%3A%2F%2Fs.mkswft.com%2FRmlsZTo1YWU3MTJlMi01ZjE1LTQxNTctYTkxZS03OGU2MDhkNTRhMDc%3D%2Fimageedit_1_7002950111.png&w=384&q=75",
      //   name: "ViteUnProf",
      //   poweredBy: false,
      // },

      participantCanLeave: true, // if false, leave button won't be visible

      livestream: {
        autoStart: false,
        enabled: false,
        outputs: [
          // {
          //   url: "rtmp://x.rtmp.youtube.com/live2",
          //   streamKey: "<STREAM KEY FROM YOUTUBE>",
          // },
        ],
      },

      permissions: {
        askToJoin: false, // Ask joined participants for entry in meeting
        toggleParticipantMic: false, // Can toggle other participant's mic
        toggleParticipantWebcam: false, // Can toggle other participant's webcam
        removeParticipant: false, // Remove other participant from meeting
        endMeeting: true, // End meeting for all participant
        drawOnWhiteboard: true, // Can Draw on whiteboard
        toggleWhiteboard: true, // Can toggle whiteboard
        toggleRecording: true, // Can toggle recording
      },

      pin: {
        allowed: false, // participant can pin any participant in meeting
        layout: 'SPOTLIGHT', // meeting layout - GRID | SPOTLIGHT | SIDEBAR
      },

      leftScreen: {
        // visible when redirect on leave not provieded
        actionButton: {
          // optional action button
          label: 'Video SDK Live', // action button label
          href: 'https://videosdk.live/', // action button href
        },
      },
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }

}
