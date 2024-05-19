import { UploadApiResponse, v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: 'djepwirkq',
    api_key: '727892562266449',
    api_secret: 'JflH0fIF5gM3JCytGeI04hJ1wB0',
    secure: true
});

export async function handleUpload(file: string): Promise<UploadApiResponse> {
    return await cloudinary.uploader.upload(file, {
        resource_type: "auto",
        use_filename: true,
        folder: "bcr"
    });
}
