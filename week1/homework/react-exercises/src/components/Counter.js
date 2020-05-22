import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";

export default function Counter() {
	const [count, setCount] = useState(0);
	const feedback = count > 10 ? "Its higher than 10!" : "Keep counting...";
	return (
		<div className='counter'>
			<p className='feedback'>{feedback}</p>
			<Count count={count} />
			<Button count={count} setCount={setCount} />
		</div>
	);
}
