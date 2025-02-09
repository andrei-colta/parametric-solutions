import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig";

export interface Image {
  name: string;
  url: string;
  width: number;
  height: number;
  img: HTMLImageElement;
}

// Fetch file names, URLs, and image dimensions
export async function fetchFilesFromFolder(folderPath: string) {
  const folderRef = ref(storage, folderPath);

  try {
    const res = await listAll(folderRef);

    const files = await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);

        return new Promise<Image>((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            resolve({ name: itemRef.name, url, width: img.width, height: img.height, img });
          };
        });
      })
    );

    return files;
  } catch (error) {
    console.error("Error fetching files:", error);
    return [];
  }
}
