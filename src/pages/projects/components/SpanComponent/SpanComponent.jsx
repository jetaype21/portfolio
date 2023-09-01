const SpanComponent = ({ icon, data }) => {
  return (
    <span className="flex gap-2 items-center">
      {icon} {data}
    </span>
  );
};
export default SpanComponent;
