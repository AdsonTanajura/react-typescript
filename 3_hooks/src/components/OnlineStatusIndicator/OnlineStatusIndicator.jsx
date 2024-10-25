import useOnlineStatus from "../../hooks/useOnlineStatus"

const OnlineStatusIndicator = () => {
    const isOnline = useOnlineStatus()
  return (
    <div>
        <p>Você esta atualmente: {isOnline ? 'Online': 'Offline'}</p>
    </div>
  )
}

export default OnlineStatusIndicator
