import "reflect-metadata";
import { createConnection } from "typeorm";
import { Photo } from "./entity/Photo";

createConnection({
    type: "postgres",
    host: "ant-man-rds-dev-cluster.cluster-cyhy1ftsjccr.ap-northeast-2.rds.amazonaws.com",
    port: 5432,
    username: "inflab",
    password: "inf#$lab!%",
    database: "ant1",
    entities: [
        Photo
    ],
    synchronize: true,
    logging: false
}).then(async connection => {
    const photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

    const photoRepository = await connection.getRepository(Photo)
    await photoRepository.save(photo);
    console.log("Photo has been saved");

    const savedPhotos = await photoRepository.find();
    console.log(savedPhotos)
    // here you can start to work with your entities
}).catch(error => console.log(error));

