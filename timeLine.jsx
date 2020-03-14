function TimeLine(props) {
  const tweetList = props.tweets.map((tweet) => (
    <Tweet
      key={tweet.id}
      icon={tweet.icon}
      displayName={tweet.displayName}
      accountName={tweet.accountName}
      content={tweet.content}
    />
  ));

  return <div className={'timeLIne'}>{tweetList}</div>;
}
