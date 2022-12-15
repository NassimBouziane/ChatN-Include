import addNotification from 'react-push-notification';

export default function notification(contenu) {
  
        addNotification({
            title: 'Nouveaux message',
            subtitle: 'This is a subtitle',
            message: contenu,
            theme: 'darkblue',
            native: true,
        });

}