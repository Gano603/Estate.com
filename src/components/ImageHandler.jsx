import { PiUploadSimpleBold } from 'react-icons/pi'
import { AiOutlinePlus } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import { BiErrorAlt } from 'react-icons/bi'
import toast, { Toaster } from 'react-hot-toast'

const ImageHandler = ({ files, setfiles }) => {
  const File_tab = ({ data, iteration, dat, setdat }) => {
    const removeTab = (iter) => {
      return (
        setdat(dat.filter((index,i) => i !== iter))
      )
    }
    return (
      <div>
        <div><span>File {iteration}: {data.name}</span><RxCross2 onClick={() => removeTab(iteration-1)} /></div>
      </div>
    )
  }
  return (
    <div id='functionality'>
      <Toaster />
      <h2>{files.length === 0 ? "Upload images of your property" : "Images"}</h2>
      {files.length === 0 &&
        <div className='file-input' id='file_input' onClick={() => document.getElementById('fileInput').click()}>
          <PiUploadSimpleBold />
          <h2>Upload your images</h2>
        </div>}
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="file" onChange={(e) => {
          if ((files.length + e.target.files.length) > 10) {
            toast(<span className='toast-notification'>
              <BiErrorAlt /> Max 10 Files Allowed</span>, {
              duration: 4000,
              position: 'top-right',
            })
          }
          else {
            setfiles([...files, ...e.target.files]);
          }
        }} accept='image/jpeg, image/png, image/jpg' multiple id="fileInput" style={{ display: "none" }} />
      </form>
      {(files.length > 0) &&
        <div className="file-tab">
          {files.map((value, iter) => (
            <File_tab key={iter} data={value} iteration={iter + 1} dat={files} setdat={setfiles} />
          ))}
          <div>
            <AiOutlinePlus onClick={() => document.getElementById('fileInput').click()} />
          </div>
        </div>}
    </div>
  )
}

export default ImageHandler