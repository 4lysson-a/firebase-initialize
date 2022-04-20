import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import { firebaseDataBase } from "../../firebase/config";
import { UserProps, UserPropsWithouId } from "./types";

export async function getFirebaseCollection(collectionName: string) {
  const collectionData = collection(firebaseDataBase, collectionName);
  const docsData = await getDocs(collectionData);
  const responseData = docsData.docs.map((doc) => doc.data());

  const dataFormatted: UserProps[] = responseData.map((data, index) => {
    return {
      id: data?.id || index + 1,
      name: data?.name || 'Não informado',
      age: data?.age || 'Não informado',
      description: data?.description || 'Não informado',
    };
  });

  return dataFormatted;
}

export const addFirebaseData = async (
  collectionName: string,
  data: UserPropsWithouId
) => {
  try {
    const docRef = await addDoc(
      collection(firebaseDataBase, collectionName),
      data
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
