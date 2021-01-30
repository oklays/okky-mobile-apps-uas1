const getId = (
  url = 'https://www.youtube.com/watch?v=W-w3WfgpcGg&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMW-w3WfgpcGg&start_radio=1'
) => {
  var video_id = url.split('v=')[1]
  var ampersandPosition = video_id.indexOf('&')
  if (ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition)
    return video_id
  }
}

console.log(getId())
