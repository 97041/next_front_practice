
"use client";

import { useState } from "react";

export default function Upload() {

  const [url,setUrl] = useState("");

  const uploadimage=(file)=>{

    const formdatasss= new FormData();

    formdatasss.append("file",file);
    formdatasss.append("upload_preset","abir_image_upload");

    fetch("https://api.cloudinary.com/v1_1/drrthis4q/image/upload",{
      method:"POST",
      body:formdatasss
    })
    .then(res=>res.json())
    .then(data=>setUrl(data.secure_url))

  }

  const fileupload=(e)=>{

    const file=e.target.files?.[0];

    if(file){

      uploadimage(file);

    }
       

  }
 


  return (
    <div>

      <input type="file" 
          className="bg-green-500 text-white p-4"

          onChange={fileupload}
      />

      {
        url && <img src={url} alt="" width={200} />
      }
      
    </div>
  );
}
