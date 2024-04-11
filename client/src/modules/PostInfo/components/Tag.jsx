

const Tag = ({ text }) => {


	return (
		<div className="flex border rounded-md w-fit p-1 cursor-pointer hover:bg-acc">
			<span className="text-sm font-bold">{text}</span>
		</div>
	)
}

export default Tag