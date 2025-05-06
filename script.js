JavaScript (script.js):
```
const createBucketForm = document.getElementById('create-bucket-form');
const uploadFileForm = document.getElementById('upload-file-form');
const downloadFileForm = document.getElementById('download-file-form');
const deleteFileForm = document.getElementById('delete-file-form');
const deleteBucketForm = document.getElementById('delete-bucket-form');
const resultDiv = document.getElementById('result');

// Tambahkan event listener untuk setiap form
createBucketForm.addEventListener('submit', createBucket);
uploadFileForm.addEventListener('submit', uploadFile);
downloadFileForm.addEventListener('submit', downloadFile);
deleteFileForm.addEventListener('submit', deleteFile);
deleteBucketForm.addEventListener('submit', deleteBucket);

// Fungsi untuk membuat bucket
function createBucket(e) {
    e.preventDefault();
    const bucketName = document.getElementById('bucket-name').value;
    // Panggil API untuk membuat bucket
    // ...
    resultDiv.innerText = `Bucket ${bucketName} berhasil dibuat`;
}

// Fungsi untuk mengunggah file
function uploadFile(e) {
    e.preventDefault();
    const file = document.getElementById('file').files[0];
    const bucketName = document.getElementById('bucket-name-upload').value;
    // Panggil API untuk mengunggah file
    // ...
    resultDiv.innerText = `File berhasil diunggah ke bucket ${bucketName}`;
}

// Fungsi untuk mengunduh file
function downloadFile(e) {
    e.preventDefault();
    const fileName = document.getElementById('file-name-download').value;
    const bucketName = document.getElementById('bucket-name-download').value;
    // Panggil API untuk mengunduh file
    // ...
    resultDiv
```
