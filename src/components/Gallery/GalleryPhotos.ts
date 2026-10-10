import type { GalleryPhoto } from "./GallerySection";

const BASE = "/gallery/";

/**
 * Rows of three. The wide tile moves across the rows like the design:
 * row 1 left, row 2 right, row 3 middle, then repeats.
 * The last row reuses two photos (different crops) until you have new shots.
 */
export const bootcampPhotos: GalleryPhoto[] = [
  // Row 1
  { src: `${BASE}96592ad5354c1593de3417bb00d511466ad4bd89.jpg`, alt: "Students and mentors holding Lead, Influence and I am a leader signs at the bootcamp banner", wide: true, objectPosition: "50% 35%" },
  { src: `${BASE}bd2f25c26e3449514bd36a1a9c809ea37efefca7.jpg`, alt: "Two students with leadership signs under the event banner", objectPosition: "50% 30%" },
  { src: `${BASE}338b45f42edf017e4be338c7e7ab9035eb2ece94.jpg`, alt: "A student filling in the registration sheet while a volunteer helps", objectPosition: "60% 40%" },

  // Row 2
  { src: `${BASE}743118aac56117b50d41fea6a288ac416ff6d80d.jpg`, alt: "The 8th Consulting team in event shirts", objectPosition: "50% 25%" },
  { src: `${BASE}e8ecdd2bb1ccaea486bfeea13eea4097a8beaffe.jpg`, alt: "Two members of the team smiling together", objectPosition: "50% 25%" },
  { src: `${BASE}4a1f2b2bf78d4fe4744766334855e66fe2268b54.jpg`, alt: "Students writing at a table covered in stickers and folders", wide: true, objectPosition: "60% 45%" },

  // Row 3
  { src: `${BASE}7decaed5cb5b64610f172437aec39b878014d568.jpg`, alt: "A participant getting ready for an activity", objectPosition: "50% 35%" },
  { src: `${BASE}92512c0d161552946134bd92f650cdd4fb5dadf1.jpg`, alt: "Students seated and listening during a session", wide: true, objectPosition: "50% 45%" },
  { src: `${BASE}cc69b81821260e030a9659b7eb14129ca81c0b25.jpg`, alt: "A smiling volunteer at the registration desk", objectPosition: "55% 35%" },

  // Row 4
  { src: `${BASE}73efccdd16b67674b667af0419142f426ca73782.jpg`, alt: "Students chatting between sessions", wide: true, objectPosition: "45% 40%" },
  { src: `${BASE}7ef91fe804118b56371b431667e33792f22fcaee.jpg`, alt: "A student listening attentively during a session", objectPosition: "50% 30%" },
  { src: `${BASE}80d8a81bfd4879079464d088ae2bfa8bd633d4c2.jpg`, alt: "Students writing on their 8th Consulting vision boards", objectPosition: "50% 55%" },

  // Row 5
  { src: `${BASE}1a412f070013133c460e0f3ae0c2c6fc5e16009b.jpg`, alt: "Three students holding leadership signs in front of the banner", objectPosition: "50% 30%" },
  { src: `${BASE}78d65835ba7c4a4305aa0e6235aa9ae2642a53fd.jpg`, alt: "Facilitator speaking to the room with a microphone", objectPosition: "50% 25%" },
  { src: `${BASE}e0caccb723902896daec9193ad7fb98f829bec1e.jpg`, alt: "A volunteer explaining the vision board activity to students", wide: true, objectPosition: "50% 45%" },

  // Row 6 (first and last tiles reuse photos with a different crop)
  { src: `${BASE}4a1f2b2bf78d4fe4744766334855e66fe2268b54.jpg`, alt: "Students writing with colourful pens", objectPosition: "15% 55%" },
  { src: `${BASE}b89dadf3b3cd1ddb7a6e317f9941d56cf9f1d8f3.jpg`, alt: "A volunteer talking one-on-one with a student", wide: true, objectPosition: "35% 45%" },
  { src: `${BASE}cc69b81821260e030a9659b7eb14129ca81c0b25.jpg`, alt: "A volunteer smiling at the check-in table", objectPosition: "50% 30%" },
];
