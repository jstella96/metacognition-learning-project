import axios from 'axios';

const axiosService = axios.create({
    //공통 설정 입력
});
   
function putVideo(videoData) {
    return axiosService.put('/api/videos', videoData);
}

function getVideos() {
    return axiosService.get('/api/videos');
}

function getVideo(videoId) {
    return axiosService.get(`/api/videos/${videoId}`);
} 
function deleteVideo(videoId) {
    return axiosService.delete(`/api/videos/${videoId}`);
} 

export { putVideo,  getVideo ,getVideos, deleteVideo};