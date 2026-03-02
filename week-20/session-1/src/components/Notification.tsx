type Props = {
    hasNotification:boolean
}
function Notification({hasNotification}:Props) {
    return ( 
        <>
            {hasNotification && <p>You have a new Message</p>}
        </>
     );
}

export default Notification;