import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext)

const felizArr = ["Feliz cumpleaños", "Feliz cum", "Joyeaux anniversaire", "Sapo verde", "Japi berdei", "Feliz vida", "Felices 24", "Felices 24 vueltas al sol", "Feliz día"];

const namesArr = ["Andrea hermosa", "Andrea mi amor", "Andrea Alejos", "amore mio", "cabezona bella", "rollito vegano", "amor bonito", "princesa", "reina de mi vida", "chinita guapa", "ojitos jalados", "mi asiática bella",
    "corazoncite chiquitite", "mi Andreo bonito", "amor de mi vida", "ojitos lindos", "nalgas ricas", "mi renegona hermosa", "señora espose", "guapura", "belleza divina",
    "bebita terriblemente estética"];

const reasonsArr = ["tener un corazón tan hermoso", "darme un amor tan puro y bonite", "ser una hermosa persona a pesar de todos tus problemas", "cuidarme y querer lo mejor para mí",
    "ser una fiel compañera y la mejor enamorada de este mundo", "siempre estar dispuesta a ayudar, eres la mejor", "alegrarme la vida", "hacerme inmensamente feliz", "cuidar de mi niño interior chiquitite",
    "hacerme sentir amado y valorado", "sacarme miles de risas con tu único sentido del humor", "estar siempre para mí", "ser mi incondicional", "ser mi verbo to be",
    "ser una mujer extraordinaria con un potencial increíble", "quererme tan bonito"];

// const imageUrls = [
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_8308-min.gif?alt=media&token=ffdf6dad-7737-49b4-8287-a725b4f01e58',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/16595322-097a-484b-9b42-f5fdc4f680f9-min.jpg?alt=media&token=2b4ab6cc-a434-4b70-9735-b4e27f6bac04',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221101_032735-min.jpg?alt=media&token=e83df619-5e59-45f8-9d79-bd8db84650b0',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221114_234500-min.jpg?alt=media&token=e15b9929-93e9-446d-9635-b7d81cda1e67',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_8495-min.gif?alt=media&token=679eee81-c7b3-4b16-8543-7c8bb01ea6bd',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221114_234657-min.jpg?alt=media&token=a2b44cda-9ad1-4132-bd3f-45ed952277a9',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_6220-min.jpg?alt=media&token=b5aa4b23-a0d2-4def-940f-261af8e76b77',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221129_225003-min.jpg?alt=media&token=fd41254a-2ec9-4cf2-b450-a9e8b745b564',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_8994-min.jpg?alt=media&token=6ebe9fcb-ba3a-4883-9791-e7581feb1b42',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221129_234010-min.jpg?alt=media&token=342f146c-06cb-449e-ac27-6423a615e298',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_3135-min.gif?alt=media&token=ac8e477f-5d02-41ef-90ee-88a26186ba1e',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221130_024407-min.jpg?alt=media&token=3723bc8a-475e-4903-ada8-d86f36384fc1',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221201_182454_03_exported_1670136772093-min.jpg?alt=media&token=aad4c757-2684-4d91-b146-d7d86e56821a',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221201_183438-min.jpg?alt=media&token=9d5386c9-232a-47ed-a047-30fe4cb09af7',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221201_183741_04_exported_1670137329316-min.jpg?alt=media&token=4b4d9273-ae0e-46f6-8035-480a795d2eef',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221201_184254_09_exported_1670136636961-min.jpg?alt=media&token=8b9a4151-dee7-43da-a0cc-6adc7823d9ce',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221208_182535-min.jpg?alt=media&token=6fda5cb1-7fef-4e85-8d37-2f745c19ebeb',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221208_183230-min.jpg?alt=media&token=e5ac98ee-f585-4053-a7bc-788079f3d727',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221208_211126-ANIMATION-min.gif?alt=media&token=6d53f751-d036-43e6-bbd6-191bc30d92bc',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20221220_081603-min.jpg?alt=media&token=6e3b487f-0f31-418b-a766-22741b96fa42',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20230123_172008-min.jpg?alt=media&token=91b0315d-1f2b-4e9b-bd43-2ed980500562',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20230307_193453-min.jpg?alt=media&token=c462ef32-3109-4d68-92f5-82dab3e73e22',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20230402_224116-min.jpg?alt=media&token=9ef2fed5-998a-4356-a16d-e007399f26ae',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20230506_234316-min.jpg?alt=media&token=9e5654bc-7bc2-427d-b1b9-5bbea576429b',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20230520_210036-min.jpg?alt=media&token=181d756f-48bd-498e-986e-4bb84e0e0389',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20230602_180955-min.jpg?alt=media&token=148d126a-35a0-4454-be18-870c0d005d15',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20230610_164548-min.jpg?alt=media&token=afb14664-3c5d-4a0e-979b-c56cb7f638d5',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20230623_201904-min.jpg?alt=media&token=34705cfb-754d-4d6d-970b-1365d5825ba2',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20230702_184624-min.jpg?alt=media&token=330f9e3b-070a-46ce-99a7-abeb0e597e57',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_6221-min.jpg?alt=media&token=89eab211-7c75-41e0-a6f1-c675db681269',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_8492-min.jpg?alt=media&token=998562a4-a550-4fc0-8ef3-42aeb65bb2aa',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/20230709_010816-min.jpg?alt=media&token=6252f868-9329-4329-a6ee-81b5a46a22c1',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_6215-min.jpg?alt=media&token=96273bba-3c2b-41f8-a29c-c8cf8f2a9fd7',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/5BD268F1-C12F-min.jpg?alt=media&token=692a9b11-01a6-4cbe-9081-41290583e70b',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/B8600C2A-7C9B-4CED-min.jpg?alt=media&token=5911778f-4108-425f-ac9e-e94ab59430eb',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221029-WA0066(1)-min.jpg?alt=media&token=771d3680-5da8-46ca-a465-014c67a48426',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221029-WA0071(1)-min.jpg?alt=media&token=3a55611d-c961-4b81-9be2-a01a562cdc2c',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221030-WA0003-min.jpg?alt=media&token=3bc85e6e-5e29-4ae0-aa0b-5229e82e8ce4',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221030-WA0006-min.jpg?alt=media&token=64c44660-0ae5-4b51-87f6-66d60d95118f',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_3127-min.gif?alt=media&token=d2460805-181f-4f90-8d9d-897b7d9c9082',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221101-WA0016-min.jpg?alt=media&token=09496a71-4bb4-436e-8a8a-5e2f56cae348',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221101-WA0023-min.jpg?alt=media&token=4dc67aa3-fe15-40f5-b775-a603ce443406',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_8995-min.jpg?alt=media&token=6ef5a586-9352-441b-b57e-54562d358751',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221101-WA0024-min.jpg?alt=media&token=f511cdf1-8eb5-4357-a613-c0812437e3a8',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221107-WA0010-min.jpg?alt=media&token=ae769939-2e62-4f6d-aec5-829c492cfc9f',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221107-WA0015-min.jpg?alt=media&token=cb6993f9-3eb0-47c7-837a-ff157846e9cc',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221114-WA0070-min.jpg?alt=media&token=7aaa3ede-547d-4102-af9e-c9db63cdc8c1',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221114-WA0071-min.jpg?alt=media&token=8e7970ea-7611-4bc1-8845-4247833d49c5',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221116-WA0056-min.jpg?alt=media&token=3fa91af9-f1c0-4445-878b-8f184a82a642',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221202-WA0003-min.jpg?alt=media&token=1fdcd845-d7af-4774-ae3f-25cc5f0db11a',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221202-WA0012-min.jpg?alt=media&token=69b02d7a-5947-49e7-a9c2-bff11092e87b',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_3143-min.gif?alt=media&token=4ec2fa95-583b-48c2-9877-71716c916990',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221202-WA0014-min.jpg?alt=media&token=2ec74c19-6dde-4aad-92c4-0efeeb1ce5c8',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221202-WA0016-min.jpg?alt=media&token=c9bea708-d9dc-4150-9932-287ec9f89b54',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221202-WA0022-min.jpg?alt=media&token=4cc88558-d46b-4428-8358-4cebf842a4f0',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221202-WA0023-min.jpg?alt=media&token=345da187-e946-4e60-b6a1-7e90642fd7dc',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_6224-min.jpg?alt=media&token=dcc75d22-369c-4db0-823b-4c67a7d4f1a0',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221208-WA0041-min.jpg?alt=media&token=92a36827-8a04-4364-b457-c7da8940c432',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_3154-min.jpg?alt=media&token=646a53f8-67bc-4fc9-8041-81658814c833',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221225-WA0031-min.jpg?alt=media&token=43f44f51-5dac-4081-9668-ff62e4061ca0',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221228-WA0114-min.jpg?alt=media&token=260c307c-89f0-48d2-9565-694fe0222bef',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221231-WA0021-min.jpg?alt=media&token=d6306cdb-618a-451f-bd59-7bd2f7c5ec00',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20221231-WA0056-min.jpg?alt=media&token=a2c95085-7e03-4ceb-99ba-8e854a467449',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_7309-min.gif?alt=media&token=28e17a72-2960-4448-b3f1-199b86a054b4',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_7618-min.jpg?alt=media&token=8552ee4f-61b1-40ee-84d1-9cac0f1d6be5',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_9199-min.jpg?alt=media&token=d2819e19-b19a-4e18-b800-f021a462d775',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20230101-WA0044-min.jpg?alt=media&token=df5c7d93-8151-4de4-9844-f7507046791a',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20230113-WA0038-min.jpg?alt=media&token=92099d6a-9aed-451a-b6bb-c822c7f51a69',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20230113-WA0048-min.jpg?alt=media&token=06213350-97ba-4363-a18b-a26119b4b20e',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20230206-WA0008-min.jpg?alt=media&token=b876efd2-64b1-4cfb-b862-a69706d7921f',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20230214-WA0058-min.jpg?alt=media&token=e1d9a9b1-e005-4183-a91d-76855600c4ee',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20230317-WA0002-min.jpg?alt=media&token=394572a6-97a8-4b38-a108-50ceb8e2396c',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG-20230317-WA0006-min.jpg?alt=media&token=300f4ae1-9e6e-409f-ac28-1b4657eb71ce',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_0490-min.jpg?alt=media&token=df3b4a39-1f7b-4a0d-9044-6112e6f41dec',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_1551-min.jpg?alt=media&token=deb9fd2e-30c2-40b0-b7d4-14a0c2877100',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_1555-min.jpg?alt=media&token=0d14672e-abfa-48b6-9c2d-4010cc6a8e93',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_1561-min.jpg?alt=media&token=bd0261ae-bdab-4ff4-8264-64514c455145',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_3757-min.jpg?alt=media&token=26ffd150-43ce-469a-81e8-153854448c62',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_6195-min.jpg?alt=media&token=f47dbec7-9b2d-4f31-a76d-7bd320989a97',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_7792-min.gif?alt=media&token=2df4db0d-b96c-45b9-9acc-1d7a9eca35da',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_1680-min.png?alt=media&token=13c3125d-9f74-4592-852a-b212ab9df2cc',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_1687-min.jpg?alt=media&token=2587276f-9c1f-47d3-b5e3-e60d8a9ba678',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_7805-min.jpg?alt=media&token=4fbc130b-8c50-4f99-950f-6647bfb2f851',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_1806-min.jpg?alt=media&token=f0558510-25c6-4edc-9fa5-ff2773e6b1de',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_2858-min.jpg?alt=media&token=1d8e9e6f-f8b3-4feb-9bad-6105ad50a1a9',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_2935-min.jpg?alt=media&token=88df9751-51a1-46b3-9893-69f1f500e5fc',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_9002-min.jpg?alt=media&token=9bbc9b6d-4de3-4d60-88c5-3e15fe3a7a54',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_9758-min.jpg?alt=media&token=c1faa46e-e3a7-4843-82e6-0679ed78f708',
//     'https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/IMG_9100-min.gif?alt=media&token=8840fea0-2f2f-4457-a9d4-d576e576a66f'
// ];

const imageUrls = [
    '/photos/IMG_7792-min.gif',
    '/photos/IMG-20221101-WA0016-min.jpg',
    '/photos/IMG_7618-min.gif',
    '/photos/IMG-20221202-WA0014-min.jpg',
    '/photos/20230506_234316-min.jpg',
    '/photos/IMG_3757-min.jpg',
    '/photos/IMG-20221202-WA0016-min.jpg',
    '/photos/20230702_184624-min.jpg',
    '/photos/20230602_180955-min.jpg',
    '/photos/20221130_024407-min.jpg',
    '/photos/IMG_3135-min.gif',
    '/photos/IMG-20221202-WA0022-min.jpg',
    '/photos/IMG_9100-min.jpg',
    '/photos/IMG-20230113-WA0048-min.jpg',
    '/photos/20230520_210036-min.jpg',
    '/photos/IMG_1687-min.jpg',
    '/photos/IMG-20221116-WA0056-min.jpg',
    '/photos/IMG_6195-min.jpg',
    '/photos/IMG-20221202-WA0012-min.jpg',
    '/photos/IMG-20221107-WA0010-min.jpg',
    '/photos/IMG-20221228-WA0114-min.jpg',
    '/photos/IMG-20221030-WA0003-min.jpg',
    '/photos/20230307_193453-min.jpg',
    '/photos/IMG_3154-min.jpg',
    '/photos/IMG_2935-min.jpg',
    '/photos/IMG-20221101-WA0024-min.jpg',
    '/photos/IMG_8308-min.gif',
    '/photos/IMG_1561-min.jpg',
    '/photos/IMG_3143-min.gif',
    '/photos/IMG_9100-min.gif',
    '/photos/20230123_172008-min.jpg',
    '/photos/IMG_6220-min.jpg',
    '/photos/20221114_234500-min.jpg',
    '/photos/20221201_183438-min.jpg',
    '/photos/IMG_1551-min.jpg',
    '/photos/IMG_0490-min.jpg',
    '/photos/20221201_184254_09_exported_1670136636961-min.jpg',
    '/photos/IMG-20221114-WA0071-min.jpg',
    '/photos/IMG_8492-min.gif',
    '/photos/IMG_8995-min.jpg',
    '/photos/IMG-20221029-WA0066(1)-min.jpg',
    '/photos/IMG_8308-min.jpg',
    '/photos/IMG_9199-min.jpg',
    '/photos/IMG_7309-min.jpg',
    '/photos/IMG_8492-min.jpg',
    '/photos/B8600C2A-7C9B-4CED-min.jpg',
    '/photos/IMG-20221202-WA0003-min.jpg',
    '/photos/IMG_7792-min.jpg',
    '/photos/IMG-20230317-WA0002-min.jpg',
    '/photos/IMG_6224-min.jpg',
    '/photos/20221114_234657-min.jpg',
    '/photos/IMG-20221101-WA0023-min.jpg',
    '/photos/IMG_3143-min.jpg',
    '/photos/IMG_1806-min.jpg',
    '/photos/20230623_201904-min.jpg',
    '/photos/IMG-20221231-WA0056-min.jpg',
    '/photos/IMG-20221225-WA0031-min.jpg',
    '/photos/IMG_7805-min.jpg',
    '/photos/IMG-20221107-WA0015-min.jpg',
    '/photos/IMG_8994-min.jpg',
    '/photos/20230610_164548-min.jpg',
    '/photos/20221129_234010-min.jpg',
    '/photos/IMG_3127-min.jpg',
    '/photos/IMG_2858-min.jpg',
    '/photos/IMG_1555-min.jpg',
    '/photos/20221208_211126-ANIMATION-min.gif',
    '/photos/20221129_225003-min.jpg',
    '/photos/IMG_7309-min.gif',
    '/photos/IMG-20221202-WA0023-min.jpg',
    '/photos/IMG-20230214-WA0058-min.jpg',
    '/photos/IMG-20230113-WA0038-min.jpg',
    '/photos/IMG_6221-min.jpg',
    '/photos/IMG_8495-min.jpg',
    '/photos/20230402_224116-min.jpg',
    '/photos/5BD268F1-C12F-min.jpg',
    '/photos/20221101_032735-min.jpg',
    '/photos/IMG-20221114-WA0070-min.jpg',
    '/photos/IMG_1680-min.png',
    '/photos/IMG_7618-min.jpg',
    '/photos/20221208_183230-min.jpg',
    '/photos/20221220_081603-min.jpg',
    '/photos/IMG_8495-min.gif',
    '/photos/20221201_183741_04_exported_1670137329316-min.jpg',
    '/photos/20230709_010816-min.jpg',
    '/photos/IMG-20221029-WA0071(1)-min.jpg',
    '/photos/IMG-20230206-WA0008-min.jpg',
    '/photos/IMG-20230101-WA0044-min.jpg',
    '/photos/IMG_9002-min.jpg',
    '/photos/16595322-097a-484b-9b42-f5fdc4f680f9-min.jpg',
    '/photos/20221208_182535-min.jpg',
    '/photos/IMG_3127-min.gif',
    '/photos/IMG-20221231-WA0021-min.jpg',
    '/photos/20221201_182454_03_exported_1670136772093-min.jpg',
    '/photos/IMG_9758-min.jpg',
    '/photos/IMG-20221030-WA0006-min.jpg',
    '/photos/IMG-20230317-WA0006-min.jpg',
    '/photos/IMG-20221208-WA0041-min.jpg',
    '/photos/IMG_3135-min.jpg',
    '/photos/IMG_6215-min.jpg'
];

const AppContextProvider = ({ children }) => {

    const [feliz, setFeliz] = useState([]);
    const [names, setNames] = useState([]);
    const [names2, setNames2] = useState([]);
    const [names3, setNames3] = useState([]);
    const [reasons, setReasons] = useState([]);
    const [reasons2, setReasons2] = useState([]);
    const [img1, setImg1] = useState([]);
    const [img2, setImg2] = useState([]);


    const randomFeliz = () => {
        let rand = Math.floor(Math.random() * felizArr.length);
        setFeliz(felizArr[rand]);
    }

    const randomNames = () => {
        let rand = Math.floor(Math.random() * namesArr.length);
        let rand2 = rand;
        let rand3 = rand;
        while (rand2 === rand) {
            rand2 = Math.floor(Math.random() * namesArr.length);
        }
        while (rand3 === rand || rand3 === rand2) {
            rand3 = Math.floor(Math.random() * namesArr.length);
        }
        setNames(namesArr[rand]);
        setNames2(namesArr[rand2]);
        setNames3(namesArr[rand3]);
    }

    const randomReasons = () => {
        let rand = Math.floor(Math.random() * reasonsArr.length);
        let rand2 = rand;
        while (rand2 === rand) {
            rand2 = Math.floor(Math.random() * reasonsArr.length);
        };
        setReasons(reasonsArr[rand]);
        setReasons2(reasonsArr[rand2]);
    }

    const randImgs = () => {
        let rand = Math.floor(Math.random() * imageUrls.length);
        let rand2 = rand;
        while (rand2 === rand) {
            rand2 = Math.floor(Math.random() * reasonsArr.length);
        };
        setImg1(imageUrls[rand]);
        setImg2(imageUrls[rand2]);
    }

    const randAll = () => {
        randomFeliz();
        randomNames();
        randomReasons();
        randImgs();
    }

    return <AppContext.Provider value={{
        feliz, setFeliz, names, setNames, reasons,
        setReasons, randAll, imageUrls, img1, setImg1,
        img2, setImg2, names2, reasons2, names3
    }}>{children}</AppContext.Provider>

}

export default AppContextProvider;