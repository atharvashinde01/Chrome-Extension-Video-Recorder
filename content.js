// Inject iframe at the corner of the page that has permissions to access the camera

const cameraId = 'atharv-camera'

const camera = document.getElementById(cameraId)

// check if camera exists
if (camera) {
    console.log('camera found', camera)
} else {
    const cameraElement = document.createElement('div')
    cameraElement.id = cameraId;
    cameraElement.setAttribute('style',`
        width: 200px;
        height: 200px;
        position: fixed;
        top: 10px;
        right: 10px;
        border-radius: 100px;
        background: black;
        z-index: 999999;
        `)
        document.body.appendChild(cameraElement)
}