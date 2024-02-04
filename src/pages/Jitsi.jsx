
import React from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
const Jitsi = () => {
  const {user} = useAuthContext();
  const { id } = useParams(); // Retrieve the 'id' from the URL parameter

  const YOUR_DOMAIN = 'meet.jit.si';
  const configurations = {
    startWithAudioMuted: true,
    startWithVideoMuted: true,
    enableWelcomePage: false,
    enableClosePage: true,
    disableRemoteMute: true,
    disableDeepLinking: true,
    disableThirdPartyRequests: true,
    enableInsecureRoomNameWarning: true,
    resolution: 720,
  };

  return (
    <div>
      <JitsiMeeting
        domain={YOUR_DOMAIN}
        roomName={id} 
        displayName={user?.name}
        configOverwrite={configurations}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = '100vh';
          iframeRef.style.width = '100vw';
        }}
      />
    </div>
  );
};

export default Jitsi;
