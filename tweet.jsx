function Tweet(props) {

  const [liked, setLike] = React.useState(false);

  return (
    <div className={'tweet'}>
      <div className={'icon-container'}>{props.icon}</div>
      <div className={'body-container'}>
        <div className={'status-display'}>
         <span className={'display-name'}>{props.displayName}</span>
         <span className={'account-name'}>@{props.accountName}</span>
        </div>
        <div className={'content'}>{props.content}</div>
        <div className={'status-action'}>
          <span>{liked ? '❤️' : '♡'}</span>
        </div>
      </div>
    </div>
  );
}
