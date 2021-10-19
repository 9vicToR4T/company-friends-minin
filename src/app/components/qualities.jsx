const Qualities = ({id, color, name}) => {
let clName = "badge me-2 bg-";
	return (
	<span
		 key={id}
		  className={clName+color}
		  >
      {name}
    </span>
  );
}
 
export default Qualities;