import './index.css'

const ImagesDisplayList = props => {
  const {details, onClickImage} = props
  const {id, thumbnailUrl} = details
  const onClickImg = () => {
    onClickImage(id)
  }
  return (
    <>
      <li >
      <button onClick={onClickImg}>
        <img
          src={thumbnailUrl}
          onClick={onClickImg}
          alt="thumbnail"
        />
      </button>
      </li>
    </>
  )
}

export default ImagesDisplayList
