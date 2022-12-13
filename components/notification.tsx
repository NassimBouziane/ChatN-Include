import addNotification from 'react-push-notification';

export default function notification() {
    const buttonClick = (contenu) => {
        addNotification({
            title: 'Nouveaux message',
            subtitle: 'This is a subtitle',
            message: contenu,
            theme: 'darkblue',
            native: true,
        });
    };
    return(
        <div >
          <button onClick={buttonClick} className="button">
           Test
          </button>
      </div>
    )
}