import Tag from "./Tag"


const TagList = ({ list }) => {


	return (
		<div className="flex flex-wrap gap-2">
			{list.map(el => <Tag key={el.id} text={el.text} />)}
		</div>
	)
}

export default TagList