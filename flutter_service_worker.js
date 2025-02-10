'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "66c2ace2c16d421b10f606af9c83678f",
"version.json": "f950060819ce5e75a5eb63730a8ad1a5",
"index.html": "edd77e0c639f5dbf4bce17e06f937f42",
"/": "edd77e0c639f5dbf4bce17e06f937f42",
"main.dart.js": "5d20b298239d7013b33380d2a64387f9",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "f7b9fcf3f8e1cb7980dfef8c202fce33",
"icons/Icon-192.png": "76c3f2e8ab78ff729ca328befacf7a1f",
"icons/Icon-maskable-192.png": "502e11298e085c7c94f978b27ab3e0d6",
"icons/Icon-maskable-512.png": "c9a0f79924e7388c3e6029c08218f957",
"icons/Icon-512.png": "b9a35b02b4e7507cde74cf48bc09ab79",
"manifest.json": "505d7c644a80516a4deb68528bcaf9b1",
".git/config": "b55e0e67e4de95bf82f72593469d2ee5",
".git/objects/61/c4557ef89aff188a323dd60669a391a6c86a97": "19fb92c5ed67eae9a59d068a43e180e9",
".git/objects/61/66711f98e0b6935465c7ef137b4f30d7379c42": "e25ada048cbb4b21a6dac765c92c6144",
".git/objects/0d/2271cba2498e0950a6a216100a44f2ddbd4df4": "6ee656034b6fc6ebadc4ed5d89b68c34",
".git/objects/59/e8d8ac2e8bda0a9ef3d29881847650c1b47166": "630e369420c4e00ff973ada636382f5e",
".git/objects/0c/1f392b1b5db3a12a651a66060519a6979ae10c": "baba34df16860b0ca3588b7f74f9a0e7",
".git/objects/0c/177071d2273c41f18bf4c8db1972c28e4e9278": "c4208692492e406791d8dd875c9a3d95",
".git/objects/3e/421fd9f335f5251d8b4054133eb5381cc6f424": "fa20c050d27a1fe3b29e5975c7fdc12c",
".git/objects/50/10a971a01e309c1946947a7f15c52dc609dd34": "861437e19a0c1868918c5fa3ef1c4448",
".git/objects/57/6d68c5f9a28be43f0faeb485fcd0b88d439238": "5e9d1c684e28d9778b6b150f84be8628",
".git/objects/3b/4ca2f9f5768e79846fd577a43535506d5ac3b6": "dca7b3bedd6a0d2531504a8be4e85d67",
".git/objects/6a/1ccd3b10e0f343bc6282618d4c1332849d0a6c": "41f3b92ab9ffb35dff60525d9b19034b",
".git/objects/35/08a6496c34379553fab37a90d9909984b713b2": "87a53cbc24124b2616dcacc550a3ff5f",
".git/objects/69/2b15f578b84b09799384c625a32b82c5615b6b": "600cff6a2f0408a3e5c9fee2255501bb",
".git/objects/69/022d668e09eaaefa72c893987b69fc267a1f83": "5f8fc7782ba50ec693c151ca31b24ecd",
".git/objects/69/d5f5e8e7a9ff258629e7dfc5e9e7777edba32d": "d1b71867719a09b405f577b5f368f979",
".git/objects/3c/6a59c4890d1c365b55b27b7c892c6060ec706e": "27a5b3ac81bffa90013153f07568552e",
".git/objects/51/b6ab4af3ea3639a599f2dee4979d2a259bb7c5": "32d1d9b82c4351324222975d379414d1",
".git/objects/3d/98d1726a78d2c6fd4c5a92c21caddbe77b0aa1": "ba8f648674e56ec54a60354c2b92b3a9",
".git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
".git/objects/67/e76515e0dfd475e426457a772004f052007ab5": "c595847d40e15d4bec4ae22b8b2879cc",
".git/objects/67/3679ec4051f47b508285a9e14df412dd47378a": "c1997df60941f6e66605e1850100405c",
".git/objects/67/840bf4ad7abfccaf5430a078d111176d783135": "3426db9625d6d2f5a9e08c783383e5d9",
".git/objects/0b/f49b33cd151d75e8a3a09ff05a3ea5e3f7680f": "e6333fdfe4053119ccd3e17876a242ee",
".git/objects/60/126d5626ec9094c52362bb709453d3e9e17a70": "bcbf6f9f178c2b130d321a3ce3a70a0c",
".git/objects/34/7ceec132dbf22b6b8239a35c49c652d44f0e65": "19b1b99961cb9c5433aad7f6f41815a1",
".git/objects/9c/1a4b8e1287019218202e5c24686c69ebaee076": "cddc4165de90c388a614cc137a7a259a",
".git/objects/a3/0fc85b1b70fa9c35525e280ea3dd98f5422c84": "114c90a68bc65cdcc073170dd9d4fcb3",
".git/objects/a3/34201512feb8ac542b8466dc5b7f5686711c1f": "a76e0e8802f3fd7a42fcb5b68056b10f",
".git/objects/b5/12b68ebc2c91024049b8ee4cd0226581489c92": "1a932028060ee3b40dcd028cded8ddd3",
".git/objects/b5/c07d102367db7a5ee886aca7182a4bb82f7562": "c16dd39d7eea94abb328e6984ed17373",
".git/objects/b5/361e2cedc81ad57894e1c098fb26b312c373ab": "722bb7c999f004b1416e0ed3ea1590dc",
".git/objects/b2/0da7ecc3892595e4ddc9ec7db3074d996da66c": "477a57f0c2f81464c26fdd2b81f042f2",
".git/objects/d9/d1aac4a645428e3cfeb03f31c3fa4f30ee99c9": "fc1005c950f2f28e712920b215eb2e6f",
".git/objects/bb/e1774572e527102a3c0d468ec88eef0ba91a39": "22dd2a5c51b073b933518d77f0906965",
".git/objects/b3/b36c30e79414c7b38814a7c134266800288255": "2842ba78806820422ac28f091116a08c",
".git/objects/da/c20196958ca8e781769009b5d8102567b09b97": "93080afed5c2d9b949125b31dd20fef1",
".git/objects/da/f54c0a35fd49daea93b388876f830d3e6ef807": "711f58f2a49efa7664d779fc27260afe",
".git/objects/a2/fdced9a9c0f6315512c9a195b2ea50bb6acc5d": "bf84f56ca9234d3337532ec07f75fe6f",
".git/objects/a2/246be6c5b1eb8610cad7b58b683299c2e9aecd": "d8fa253ae4860b2702f6123a9b3c00bc",
".git/objects/a5/714f09bffd686cb199e456958f0e5e92486862": "2eb4a877f19abd7bb614f647fd4eabf7",
".git/objects/bd/5e352998a8ba7dae22091401ecf8f905c2ddeb": "d12cd76eb45ba04ea84b1618a08c50e9",
".git/objects/d1/a8acb65e74814ed11e4c4f3c31adc8712e048f": "29b791b8d9ca207817ff2c38086ba6c2",
".git/objects/d6/c2809d78e3454218020a1cdcfdad87f7c0f44b": "d679eb4958ff36f332112dee94a55465",
".git/objects/ab/083dec1cdd09f7fc153f1a4f7381841b362769": "c00df0ebdc4c074fc181656b71b8d7d3",
".git/objects/f4/b37bcbe21e91b0dc9701a04407d78275cbb465": "b6817dd82725fe0e87226b0ec5966185",
".git/objects/f4/0eeeb82882f11ad811406903eb709d99f18db3": "6bf35172d7c17d6d7d381e138c49059b",
".git/objects/c0/11ae1e3338bb6673672f4c0fab763ba745aa1a": "2ad5a1fa184e4e6cfaf3a21cd4de756b",
".git/objects/fd/655a7fbd7e6b1320fe9f60f16ebb9f2d6afce6": "5b4c4c00997312df28109315e1dd9154",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/80c5abc31039bce2bf67b89016323619c2a1fd": "f31269238af2bd44936eb88992d6efa2",
".git/objects/ca/313e5f5cbf296a92e8f6f6ddf8195ceb94bbc0": "158c86feeb4419eb08619f05d37630b2",
".git/objects/fe/8236732336bc10ef6209ae1d68848e27fe6ad0": "b6e7850a765f4f268ce57950fffcafcc",
".git/objects/fb/b6464412bea0b3fc56f3e048e6588b107ec451": "0e1e8fcd32b50ad67475fa9db6dce46a",
".git/objects/ed/aef22c86e01c57f86b28f04efc54f13e0b3d46": "caee580e6ff4399db83ab56ca5aeb617",
".git/objects/ed/43e94a205fbeca6c2164dc4caae30561e2d01c": "9ed2b829dbb138374bc5832953f2653b",
".git/objects/c1/6b0b72c5b74543a29ea016f43b16b27868d821": "353ddf24bfdc88bd821f3e6dc5a1b28b",
".git/objects/c6/c53c7221809e90666c93f1e40870f8d24a55f7": "787cbed19c335c8fda46d4ab5155d755",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/7f8a810483164486eb0234246dd49f77b43c9e": "499b0accc497feaf3bee7e4aabe06f06",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/f1a507a6c7dc25b1eb69555cf1aefce9131571": "e21f9499dfb14d08ada86c250c0f3282",
".git/objects/7d/d7914ae024b130595283fee08e7a752a963397": "087e7589d12f0999cb65cac8b4d185dc",
".git/objects/29/c503b711732f03bf8aef5d8cbe5527aaeb1562": "a4107af0ee25cbcad1e9143b3c3a0632",
".git/objects/7c/a593a8104ca736b26cb37c5173682ffb298d48": "6fa14f253c33b03e27c28b48902f0bdf",
".git/objects/89/dd467954f05f6bad7caffb25df1007c66658db": "175c58b61f38e394fa44ded9d65779f5",
".git/objects/45/21118be1ab43620bd3b83fbb8bba23c0187465": "1348fd82246833a122bbf4fd39690153",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/87/850df87074d5bc1893a9fa4bea391a02e8ba7d": "487e58039990112965973ae33cdcd095",
".git/objects/74/fb6fb7a57ba981178f078a58846440eb822858": "07677bf8fe39ea26f2073cef628990f9",
".git/objects/74/4b1f09b59c4c1f0e8426abef8ac241b7db20f1": "cfcaf98bd51ec2d83fc76adeab57ed60",
".git/objects/1a/2f0c0404890885785c2a12f19ca9876c5347fd": "d268676cbb718b651e11a57debffe8d2",
".git/objects/1a/8e7be4b9784bb0b49aaf69307bd1e6dc85025d": "9bb463594058599e2d9e81741d446cbc",
".git/objects/19/0799186df6388d7a0e569569b67099f2e1dd09": "c08c46fa8deb8522c86b1410207a7660",
".git/objects/26/db56efa7591e0b7f1b9728791bb8a84e9dab96": "abc349fed06d3c987c14c7ae6011aa16",
".git/objects/75/cd54d8b2724a265ca030c37c6836a362afc318": "2bd7e7eb4a928fac4429ff015adc1b2e",
".git/objects/75/b8a1af86820130b515ed55ba8745626a31c495": "a6200496a4e5a300d6861d526fb0a568",
".git/objects/81/b1236a6cb012bef4b5b94532ee6ba02654595a": "84326ee2ef4ca426e6b6853a9fa1c3b6",
".git/objects/72/9d88f4870da788e7033d8578667966fbaef6ee": "ead42464030faaf72a093d0911ab9962",
".git/objects/2a/1d904b5acbd9d37169affb4fd2dbe2a3b74200": "c13962de48cab29fd322b080c45e1496",
".git/objects/2f/8e0165415bfa4f1e220a2389a47f9a20f82b19": "24e09ca79b0811adaac71e29f0e94c60",
".git/objects/9f/8a5cd247c2310d554f84e385167b4b432920b7": "0c27990f05b0c6e9b7c788c0c21f860f",
".git/objects/07/1783c4f0940eb6be5ecf837c0cb53caadd3a36": "205e34e2ef99657515b61739a206bc72",
".git/objects/38/814afd1d67a39ca8b8c9a956978924c793d088": "fed5f5fb4a0935d8ad3c052fba958842",
".git/objects/00/2cdca654c71e72dcd99cbbcbe6f0e72024c799": "2e24e689b20d7917a35f8606f281dfe6",
".git/objects/6e/39b11cb948675b434ed10562b80169453bf859": "57788ede8756133a9448002ad8dbe666",
".git/objects/9a/709275385baa97274d05a0536265df51b7078d": "70698a231cd6320917e11d287dd03740",
".git/objects/36/0124507d65a26f53dcffa9ebed1bb4d5de0a20": "ea282129de108ebf16ccf0f116610919",
".git/objects/5c/807248d5084f3ff876fcafe1a17a433c98e4aa": "1e819b25dae780a7707a799eeac394c3",
".git/objects/09/2b7c189123a6bdedc0a0b673a5e4f670eb764f": "de11671063cf8eda4b2c53a6a7a42a38",
".git/objects/09/bc44f3e4d40e55413702f984e08e9ac6039da7": "afc7123388a0eec81124471c8462932a",
".git/objects/91/f770994805213b775b5cbe504119e1a22756b2": "9134f5a4ce51c311edabf9f82f276ecb",
".git/objects/65/d34257abe4940fcdb0be08a021efb74d747dcb": "acac836889668d4954c87b0403e92f09",
".git/objects/62/d9534b8cabb168e6d8cb1b5ea007489e4e0c77": "35777765ba0cfa28458c0da5904a0d2e",
".git/objects/62/cc7a36457434243ed5776874500cb7041453ef": "f96cda435f6ddbdab1d6e9699a4e7559",
".git/objects/96/462420f7f24de8bc2e390e30cecb9aa0ba50f6": "23d4250a257152bcfb47d6ec27b05dc9",
".git/objects/3a/37b8bd20dedd3f9525704668b302e69989da24": "fb1628c039efda0955c1bdb47869cb12",
".git/objects/3a/98838adddfd7c1e3c2d49124428014d7e342e2": "e824a1f32944f48257e6924d1d428ba3",
".git/objects/54/416e4e23806e6610527f135e16795b114ee655": "79a07966003d907cb2d8397147cc46ba",
".git/objects/3f/ff2f85b1a8a4957792855175b5953c79012b9a": "00d073298a7aadea02f9f5bc547999b7",
".git/objects/3f/c027bcb0c65d11d0dc2d11158e3580e0925ccf": "9b00bcffcf38e897401e19b45dbc38b0",
".git/objects/30/bd57dc108a80bad0fd997d9081288e37b4eaa4": "f330befbcb68bd025053bb5bf9fab22a",
".git/objects/30/fbae36ea37b2d2265c2b126d967e00c0daed6d": "5a3670685a2bd69bba29c0171b9b0a5d",
".git/objects/30/441897b4f799a34461d5cec53c7fa3fc0de12b": "4e175ebe03b08dda708dbcdd665620b4",
".git/objects/5e/954c4ff568ce2bbdc44dbf2c05d68f61e0ee04": "5e1fcc78b37f8c0c5a6d5ba634a9f4ba",
".git/objects/5b/436c4e796df6f3ab445abded0cc3f887b82e77": "20c308eaf4db4b74ac42569f1403c3eb",
".git/objects/08/1bf6b7ebc5c57e4dc45b53dae888b9ea9b6a4e": "d7985d7650e7938a967e40f430669d10",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/00251f46c67c8af071cdd09725d8b7c3f3a8fe": "3a9420509ead31c5f6d7855009e480db",
".git/objects/6d/4b1ac6acadd5f9564c064897cd35c3dc776941": "f4a981415ed7e56921c88da0b63600d6",
".git/objects/6c/a173fb9c8f2377fba40aa1e4aa5260899b28c8": "36016f4c07ecfbc0f2f4dc6b0872483b",
".git/objects/6c/5994c8b5e3108a6627e861cf6aa0a29a66b74a": "fdc81d9657faed597a513fdbfe9e804a",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/99/4bdead8b2301b61417812c4f21c41471e8ea5e": "b8baeded3fd8b95629a21da915b69938",
".git/objects/99/4014e72c891bc35942e33826a9da518ff9a358": "83f6b3b30d171358034fc750e9328737",
".git/objects/97/c13e332b7bbb4de0b3bd5de5d61fc2d28b6ba3": "9d4a326d54158d12551f2abfd4937575",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/bb1d5d6c5d08bc6ef23b5583b7f5279c53a4a8": "128dc0d3db7157ee99ce1dbc47fc9421",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
".git/objects/90/4d5b659f74d92a38d85b4059d7e4ffac1fea54": "7a6954499f7f612a555846b94a4395bf",
".git/objects/bf/6b555ce9e6dd36ab8d794f0cbe1bf00aa29270": "e52d097f7a04ea93f150742ca03844c1",
".git/objects/d3/5e3a12ea6f29801e9f63046ebf17e474c3458d": "ef5574e8ed98e3cff54af9f178935eb8",
".git/objects/d3/266cd003c290dc3de54d7865324d22b2595d48": "c3b2a462c69aba803a2655b83e5da8e3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/69d263b68588acfc479d8814fe8a84de7f2aa5": "ef95a720fc1955fe87e62e7e80a838ee",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/ae20746bdba90a932a0039f4b0cc12d0a3a3fa": "5b6a7f5682cfdeb7b733e05ccb99146d",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/c10506fd5a088562a401a7bf026441c7c02bb1": "858c085b8509ce9320c7ecf9dfbcfdb8",
".git/objects/b6/2e733f4c9c572572b3378eaddc445c979b49d1": "ef321a7eda6ab2ece5c169d712572563",
".git/objects/b6/5c78a5f079f361a1d55d35fa7949a4c1798f94": "abe1b8c4aa4dab5c93639e809e384b1e",
".git/objects/b6/7020aa727a32d2a1af7bbb21cbb9a65d92b6fd": "bb38018f0dd8bc68fa137233da9aa333",
".git/objects/a9/9d2c1017c4f30be515077b913f8f736c404ad8": "80d3bfc8b4fb19f759dc209b5e71d55e",
".git/objects/d2/c08d13410f82aa874187339fb5a5b70e0803e3": "e7d2a8ba9b310a31befa807de3f1f0f6",
".git/objects/d2/cbe15fe7b5e5084720f51cfcc5b1c25bc57b51": "273a2f514c06c9b56b3b04037cfbaaea",
".git/objects/aa/cf8a86893eca6d6d07312369235c63ea8b47ea": "440d8f6c1bd209f9cebc446d9c6feb23",
".git/objects/af/dae8db145bfcd5e2e90afcbf95cfee3232ef89": "a33421f5c7307755c1f4d073fa5d0d5b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/b795ec3c17b944f833e7a2a13969c0ddb9df67": "96c41820a1adda7039068116eb8bf4c8",
".git/objects/a8/92b395d96de7e37f39bfb1f31bb50c918e1712": "857123e0b609d1fe92bad051c7e857ff",
".git/objects/de/173a6da68b179d4652ecb75a664d4c5a7fff72": "26bcaca96f775aa168c6771ba96dbcec",
".git/objects/b0/7ec26656f5e22f12179bc2cabdb32b1958096c": "ce15a869ea467749175eec74237ec103",
".git/objects/a6/538e034d6f37fed3afe56c556bbfab216583a3": "c60597ef59ea0a0c7d09ef03819ba146",
".git/objects/b9/a7285fc91a9df1ad443efa6b969125f5fb0228": "4870bb16e52a5a8c96ff87ace00ff2a5",
".git/objects/a1/ecd8948ceeb20ff758fd34663d72a7e52a9841": "7c08f5fdc6948d98c983c29fb9e35381",
".git/objects/ef/24012cb9d245d07c28709de0d8b78d4dd365e4": "ef61745598497231d5a17f7ac6d9f5d7",
".git/objects/ef/446a07571845b70d82f8fb6ec46138198a116a": "30dfb8902fa38d9fcf1ee70841a8219b",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/2cd94572f72ac93ccf94733492b31467577acc": "484ad019c6e590c5945144fbecfad35d",
".git/objects/c3/c7074b0e2fef1bcc0629612738480ad669334b": "340982ec3d142e553546764e90de5f1d",
".git/objects/cd/72396a2710842cf50cb8ebb17516bdea31b81f": "8300ae2f2c5f7f5abcf8852424a08eec",
".git/objects/cc/4397036366960ec7deeadcb4b28dcd8eedbb00": "4714ea379791a22d6c47e8b0e31f683e",
".git/objects/f9/87071f97088a109a06987ff8e7289c74008bde": "aebdda2bf1eaa523365e507fb69951c7",
".git/objects/ff/b34d8557eb2856ce18eb02e0308b35651f495e": "fc12861751ef7274d9060029c23495b5",
".git/objects/c2/835a69165c74c04332682854bde287c29f900d": "16ed45e68987743be2a2ce8cef8102e2",
".git/objects/e9/bb88ea9056789627426e4bd2762a788000f7b1": "9e5166a2b8a228d468b46c22c9e10507",
".git/objects/f1/88cdbdb4d04deb1164be2836ca74378625ad07": "88006535f9eac09074f8886e0c90c009",
".git/objects/f1/5ecdaca0b54487b0b0ea2d61cdd230b5f7795e": "039f2fc87e6a914dd2076d7d471a102b",
".git/objects/e7/6d30acfe3a6e3656e17dd99dd57804f2cacf80": "f87194d1614a843cf42fdce544ef7d71",
".git/objects/ce/e1163b07de912aecc3fb949f7579c611a94cbf": "55fc1bc3707e4af4ca8916af9da9f34d",
".git/objects/ce/2603bdc68746e093e4d1cd721e018d742153c1": "9d10b7411e804d859820333fffc7c7f7",
".git/objects/ce/7b5fefa50158ad07bdeeaf1b3af8e6dabf916e": "52a052f0445f8c055e66a1f79034da0e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d2c99ad04450d93b590f9180cf8195bb04ee68": "a0c5f44075935c23741a741b4bb94d1c",
".git/objects/46/5aa813d400628704654cbc96a15988c4ee8882": "fbc39f571e73e428ff7871c525040ff2",
".git/objects/2c/0218c2dbf76724e12faee12394fbdf7647d0a9": "5eb8e6e3ac8f683f8fbc5d39263d9644",
".git/objects/79/fa10d00e6b9e5b1e2e14f2a35931bb185bbab4": "4211e66946dcb8bf4da9c1274cf1b356",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/4a6902a1c7338e8168739a463e9db9810fc44e": "618071e2984c99894b31499309391ebf",
".git/objects/41/dbbc92b90ef7e62ee81c2bae3bf0888c948446": "9b65bcf864b5f25ce1c1b9a06774fa55",
".git/objects/1b/d016377ad57a76d82393a02ef6132340a382de": "ee09bd5ecf30e55e6fbd0d9f0d9425b7",
".git/objects/1b/7a6c332e60fa3ebe5a49c1044e87bd333a4bb2": "6cdc60ae2507e2f982921094801344cf",
".git/objects/1b/1457df314ca31186322c96f560591b8e112715": "27a3e9ba86abb2d3916cff3b99773ddf",
".git/objects/77/4771a8242609d5ce11aa5d166a1848a202a115": "f4b52e4ca194355e496fdd963132ac93",
".git/objects/48/0099d667a3325e8699668a3c1484194ac0f7cc": "24b5814012d0a8b3c1185c893b43fc7c",
".git/objects/70/f9000a2fd33a9bb3333a8ff81836a87649fe9d": "e9ff139b067594843b9f3fb7140fb582",
".git/objects/84/6ab2b74e543531afb6310fc4c77728aa49a73a": "1f54f6c601064b0f780cdbe44f837bcd",
".git/objects/4a/0ca11b1db8f3016711368036f213297b1a118c": "78294692014d8fd55ef72faf21cc772e",
".git/objects/23/fcdfc1a15a10222c90cc992c7318683466fb68": "37268c522357e225345397e04da526e1",
".git/objects/23/674db4f824d381cbe60b30ad1b96d7c4a2979d": "ab3ae9bddda9ac225ed48e029b67645b",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8d/fa6e7648bd5d6063df2f7d3eabf9c8f19fbe8e": "95a2d171893306d9d2477cedf7ffe7ca",
".git/objects/8d/1ba923a909c15d7fcb6e072b055beff207c344": "4f9898f85f55748d0a603c81ba9648c0",
".git/objects/15/940192aec8fab1af383446f92060fafe78e307": "20bbc031225a964bd03fc7d677eeb334",
".git/objects/15/4c7ade8565921ec8482ca5e1d5ada80fa6ec4c": "5209ec7ae2aafbc3ddd9620731da754a",
".git/objects/12/125fbd5a65f604d08004cecc01ed052c2d0d56": "f01601ba6893c1dfe7c7617ad4bf3ab9",
".git/objects/8c/a21f167e1d27aad76eb054e7027902de55ad64": "d9002bbf8b82d1d20b305c3060e34e9a",
".git/objects/8c/c903f30e26a813cc32945e5dbb860a05eed054": "878ed2eae25e5e3baafae183351a8cc6",
".git/objects/85/cb05a9762fa4ba3d38156b5c26c2acebcd1982": "86aab05e9b84ed005e4a9e60779cd88e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/68d8cd5722242ae26287e745e64e0685b45b35": "6fe4cda2200d53b5fd1f6fdcf4f81f74",
".git/objects/2e/7a8ca23c40a0cf4975b5cec58bb5b1f6fd2219": "887f24864caec4407cd8879ea633440e",
".git/objects/2b/648700729b09ce6fc9c04e8e0e8bc29e620e29": "d3c1a792a70981da13df0f4f7f4e0e25",
".git/objects/47/fc055151e8bc8e951c2e819bea2a27b3001e81": "e05245bd9a261e927460e2a2f71b9ad0",
".git/objects/8b/df6caa32a2144a27e086ad472e3a62352afd7f": "8654249367547914b0b745f835533eeb",
".git/objects/14/16776472582985a074879e78a45f266257f861": "968740de84054bdf24ea91d02c5d82da",
".git/objects/25/19ce3c242e9ee154e0fc0846d48714be7359a7": "1fc4c5ddc30a2b0427bdf69c33bb86a7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f99c9e874e5dc80778475fe45daf7a47",
".git/logs/refs/heads/main": "f99c9e874e5dc80778475fe45daf7a47",
".git/logs/refs/remotes/origin/main": "06db66298ddbfe18388524ba644788e5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5e2410dbfe952623ba8eaa254a9d97a9",
".git/refs/remotes/origin/main": "5e2410dbfe952623ba8eaa254a9d97a9",
".git/index": "b680e521f4bea8acf9ebc409fc87da58",
".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
"assets/AssetManifest.json": "16e85b2dc2517227b78f32eb6f465418",
"assets/NOTICES": "9ac3671411ef2396f4f55be2b2942a96",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "575fa3752a3a62ce6f4cedbc42662684",
"assets/packages/flutter_google_places_web/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_web/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e8c156b033c571479053b5968a825b39",
"assets/fonts/MaterialIcons-Regular.otf": "027b5a46da4aa969ef67c0b707dd47e0",
"assets/assets/menuQlounge/moriwaseSets/image1.jpg": "afa7e8c4d017376f1b5fd9031abe570e",
"assets/assets/menuQlounge/moriwaseSets/image2.jpg": "d6b6e9721f9cf60d9dd8b013ae1b76d4",
"assets/assets/menuQlounge/spicyGunkanSushi/image5.jpg": "7100ab6ee2db075c79a94d8a12bb7ba0",
"assets/assets/menuQlounge/spicyGunkanSushi/image1.jpg": "88f6658d7ecbb80648a517eec3ea2f64",
"assets/assets/menuQlounge/spicyGunkanSushi/image2.jpg": "20202594085669686b0b31b62269f7e6",
"assets/assets/menuQlounge/spicyGunkanSushi/image3.jpg": "7c4aadff41e8df9f638aeea1775e12ef",
"assets/assets/menuQlounge/spicyRolls/image4.jpg": "2270edf981f471ff00e05c2158435cfd",
"assets/assets/menuQlounge/spicyRolls/image5.jpg": "c66f2c72330fa603689c0f7dd2f2110a",
"assets/assets/menuQlounge/spicyRolls/image1.jpg": "4afbfe9ed0564433d09d6ab953d5af58",
"assets/assets/menuQlounge/spicyRolls/image2.jpg": "b1703b2e6b20e0ab95bf85477422a21e",
"assets/assets/menuQlounge/spicyRolls/image3.jpg": "86ac7628af1cc119cdbcc34e8049d4ad",
"assets/assets/menuQlounge/salads/image4.jpg": "8b666ff54aa1d24eb9e41536f7acca34",
"assets/assets/menuQlounge/salads/image1.jpg": "35904e8da199dd69f541dac4a66f8976",
"assets/assets/menuQlounge/salads/image2.jpg": "745241a9bb965c382f40a5a80691d995",
"assets/assets/menuQlounge/salads/image3.jpg": "f72d215927f65fa2a0d34d72b8e1d84e",
"assets/assets/menuQlounge/sushiRolls/image8.jpg": "534a2f82a6c119437e6db787d4b3ea22",
"assets/assets/menuQlounge/sushiRolls/image9.jpg": "9143214b7ea7fd44a7380ebf4c7e6147",
"assets/assets/menuQlounge/sushiRolls/image12.jpg": "6c947adfc40a84cd867c7e4a13327def",
"assets/assets/menuQlounge/sushiRolls/image11.jpg": "9ce5fec5f5016704ae4b4d8934a6fc83",
"assets/assets/menuQlounge/sushiRolls/image10.jpg": "c22a78c2151d6567fe920ac5126ba930",
"assets/assets/menuQlounge/sushiRolls/image7.jpg": "bc77633e522aa59d1f616cd2494bd6e9",
"assets/assets/menuQlounge/sushiRolls/image6.jpg": "77d9ac719cd51250cc40fe0dfe139d45",
"assets/assets/menuQlounge/sushiRolls/image4.jpg": "d1b8d69730ebc27d86d70938c0df1511",
"assets/assets/menuQlounge/sushiRolls/image5.jpg": "3656e3b7c16d9c0fd3abf2ca4290352a",
"assets/assets/menuQlounge/sushiRolls/image1.jpg": "1e0a8b697c7f29b4921f567b057df94e",
"assets/assets/menuQlounge/sushiRolls/image3.jpg": "95bb93a5100dbd0a3c6ee51269ebb757",
"assets/assets/menuQlounge/sushi/image6.jpg": "214d6c6e0070340323718334879d316f",
"assets/assets/menuQlounge/sushi/image4.jpg": "c5aaa2e3ecf0c784f8b4a6a8d403007c",
"assets/assets/menuQlounge/sushi/image5.jpg": "3f4d974ef2cc849479c3b3057214ea6f",
"assets/assets/menuQlounge/sushi/image2.jpg": "3bfcf1e4b9c6f171e77153c0222c0ee1",
"assets/assets/menuQlounge/sushi/image3.jpg": "96ebe7beae9e829c45848c58d31eebbf",
"assets/assets/images/qlounge.jpg": "c7ede87e57686254ac50c16c0f4aac17",
"assets/assets/images/masakaLogo.png": "e146c392cdba1e053a55cefa1523961a",
"assets/assets/images/etiler.jpg": "70b563c807cdd2824d3eb0d7b0d1a8a8",
"assets/assets/bLunch.json": "82d51f051a8f20cb1b710b53be2e7337",
"assets/assets/qlounge.json": "8fcb751fa8479109c186782487118f4c",
"assets/assets/temp.json": "7af4ca4354d0bf00c5c7599fdc94d119",
"assets/assets/temp2.json": "538731a1b20a9ce0680f60d5665e6914",
"assets/assets/menu/deserts/phistash.jpg": "7a1e84b8cb36220557613677f4352f78",
"assets/assets/menu/deserts/tiramisu.jpg": "5e896674cda301698b0f7a7903265093",
"assets/assets/menu/deserts/threeChocolates.jpg": "9550ec20ffa856c15c7e94ce92ea9694",
"assets/assets/menu/deserts/sanSebast.jpg": "fe480719650f7392343ca8b30fd26bac",
"assets/assets/menu/deserts/grusha.jpg": "822e3eaecb5b11178e7d504dc1fca7ff",
"assets/assets/menu/coldSnacks/image8.jpg": "d1609473e25d6854d976772e9a9637fb",
"assets/assets/menu/coldSnacks/image9.jpg": "a5d6a212cd6f1fb4fbcb161667f90cc5",
"assets/assets/menu/coldSnacks/image11.jpg": "99a5530c8df700350c2f919193f2d489",
"assets/assets/menu/coldSnacks/image10.jpg": "f77b39b119a01255b05bd3623f15949f",
"assets/assets/menu/coldSnacks/image7.jpg": "443f86c2e4de6f65d324b85b0aeac6d2",
"assets/assets/menu/coldSnacks/image6.jpg": "3ddd6acf0177a1928582c073e7b8af7d",
"assets/assets/menu/coldSnacks/image4.jpg": "41e0452ee3010f4efe89f8fadb1179ce",
"assets/assets/menu/coldSnacks/image5.jpg": "3d9f53dddfbcf839bf43f0d7176ef247",
"assets/assets/menu/coldSnacks/image1.jpg": "a0882ca57d66eaf3e6376bcd49885e5b",
"assets/assets/menu/coldSnacks/image2.jpg": "46d03fedfba640a4a31c0b216eecdbc0",
"assets/assets/menu/coldSnacks/image3.jpg": "a89bcadbad3f805daecf4d2c70ced79a",
"assets/assets/menu/salads/image8.jpg": "d0dc522201d562409531b0b48632319a",
"assets/assets/menu/salads/image9.jpg": "8b73d771664af0a6d70b6dad24e7f35d",
"assets/assets/menu/salads/image14.jpg": "05fd804bd1d697e20759149fa4e3a770",
"assets/assets/menu/salads/image15.jpg": "8788e6185c0542210d30e2d6b062a39c",
"assets/assets/menu/salads/image17.jpg": "24838180462f526ba438db257fbaf17a",
"assets/assets/menu/salads/image16.jpg": "8de51c4490d9cb7e6146d8f65421ea58",
"assets/assets/menu/salads/image12.jpg": "bcee46d869bd8df17c31dfcff13b3d5c",
"assets/assets/menu/salads/image13.jpg": "944cd161831afd95d20f1b82d0674abd",
"assets/assets/menu/salads/image11.jpg": "8fea49653c0f6e3137869345b679086f",
"assets/assets/menu/salads/image10.jpg": "1243bd4ed86ee1194ec03d6315003ecd",
"assets/assets/menu/salads/image18.jpg": "7fd7215e0ca68abe452a816d8f161b69",
"assets/assets/menu/salads/image19.jpg": "1d1c718889d4784f4b61cdd6a5c20f5e",
"assets/assets/menu/salads/image7.jpg": "39d2db6d85dcfee857e0b0f73f1a7875",
"assets/assets/menu/salads/image6.jpg": "f084d6e3ea09fb102c9af42afc34f84b",
"assets/assets/menu/salads/image4.jpg": "111ae90d6ed7447cda5ebe5dd50346c4",
"assets/assets/menu/salads/image5.jpg": "e6c853df73fa174f849845ec84d61284",
"assets/assets/menu/salads/image1.jpg": "aa96a3f8fde230b13d48d9a34be09caa",
"assets/assets/menu/salads/image2.jpg": "6bab75180ce9521e7cdaedf5ba275c9a",
"assets/assets/menu/salads/image.jpg": "d8a9d8b142431545d4027dd10ca30238",
"assets/assets/menu/salads/image3.jpg": "5a76283d018a49416c7388a893e8cc00",
"assets/assets/menu/hotSnacks/image8.jpg": "efb22f6435b80be0d79a0a065c0a0f0c",
"assets/assets/menu/hotSnacks/image9.jpg": "d8e9367ad316772869a52d5c7740e226",
"assets/assets/menu/hotSnacks/image10.jpg": "4e12e1150543065bbf8cfbb540385bb0",
"assets/assets/menu/hotSnacks/image7.jpg": "0efe5e6e8484d1be9b0cc292035ee26a",
"assets/assets/menu/hotSnacks/image6.jpg": "6028c4a3d29cf54769134820daeeb262",
"assets/assets/menu/hotSnacks/image4.jpg": "44e1a320e31b4eaa3e516d9d39db5034",
"assets/assets/menu/hotSnacks/image5.jpg": "85468c8635f13a7c786df851c9a0239d",
"assets/assets/menu/hotSnacks/image1.jpg": "91ea734a42d2817e310c1391a8b0d17a",
"assets/assets/menu/hotSnacks/image2.jpg": "69d4fa26eac276ba89af9642e7a411f6",
"assets/assets/menu/hotSnacks/image3.jpg": "c85a25ebe0347055329c8b4e86136197",
"assets/assets/menu/hotDishes/image8.jpg": "9b2a452a51a4f826e6f7afd5d6b07db0",
"assets/assets/menu/hotDishes/image9.jpg": "e96a6536d1bdbf2d5dd4ebb096fdb836",
"assets/assets/menu/hotDishes/image14.jpg": "5ed929e1679eee1e6b53538c36c275a5",
"assets/assets/menu/hotDishes/image15.jpg": "1324f42c2c8ca25df3d2ad6ee21a502f",
"assets/assets/menu/hotDishes/image17.jpg": "8b82253b52ebb4562d8e6a1a5161116e",
"assets/assets/menu/hotDishes/image16.jpg": "504fb1c3d19da30bde856a2343c5a0cb",
"assets/assets/menu/hotDishes/image12.jpg": "fae24b19878904ba6f8fc991e4c68161",
"assets/assets/menu/hotDishes/image13.jpg": "1b013e210ec9a381a8431dec269e3655",
"assets/assets/menu/hotDishes/image11.jpg": "647c16e610d921c4056eb3097e28107a",
"assets/assets/menu/hotDishes/image10.jpg": "bbefe62c38543259afabc12f46599325",
"assets/assets/menu/hotDishes/image21.jpg": "c46515b0b10471ca03498da79516889b",
"assets/assets/menu/hotDishes/image20.jpg": "0f7fffe9a624e5b11f958716618a7aed",
"assets/assets/menu/hotDishes/image22.jpg": "2a02e673f62f2f9e1de5a2f8cd6d952a",
"assets/assets/menu/hotDishes/image23.jpg": "eb9f22b0fa93d81cc9e386c4f69b1282",
"assets/assets/menu/hotDishes/image18.jpg": "f7ce05c61d31f4a9ebaee3904a30a712",
"assets/assets/menu/hotDishes/image24.jpg": "d590f777513692e4bccffacd1f22eecf",
"assets/assets/menu/hotDishes/image25.jpg": "1635b663a6a6bd04f6f6be555dd79341",
"assets/assets/menu/hotDishes/image19.jpg": "892bb22c1a944e44e8d5ec328c7ce149",
"assets/assets/menu/hotDishes/image7.jpg": "aebde5284ed2ff2874564bf66194ac0c",
"assets/assets/menu/hotDishes/image6.jpg": "f5bb3a2fef6a7f45d3a6bc2d85b74017",
"assets/assets/menu/hotDishes/image4.jpg": "cbf9b537472409f646b194055b9089de",
"assets/assets/menu/hotDishes/image5.jpg": "c55e8d5fd2cc7404003c5b4bb2a584b5",
"assets/assets/menu/hotDishes/image1.jpg": "a49ab576fa71c137f620772d3dd29caa",
"assets/assets/menu/hotDishes/image2.jpg": "80665fe0b4bc5dde21d2d7dd0e29a3c9",
"assets/assets/menu/hotDishes/image3.jpg": "b7a760cf276f60fb5d462c485e404455",
"assets/assets/menu/burger/image1.jpg": "b0ca6199f9f1c0a0ed03409f30e6c015",
"assets/assets/menu/burger/image2.jpg": "9c27b24271a327dbd12e16d3aa9dbb94",
"assets/assets/menu/burger/image3.jpg": "11429bff78b074e4052ddfa1e0ce9a79",
"assets/assets/menu/steaks/image4.jpg": "295de58c6ff0cb49d67b1334058a8060",
"assets/assets/menu/steaks/image5.jpg": "3ee443d1164535e9a51bec89dddd6554",
"assets/assets/menu/steaks/image1.jpg": "b1f209e2e65b535a038770a6fc9bc483",
"assets/assets/menu/steaks/image2.jpg": "0519ee0892aed7b2bd3f55b7c11b9fbc",
"assets/assets/menu/steaks/image3.jpg": "06739501cbfe7108116a1cce43225571",
"assets/assets/menu/soup/image4.jpg": "bf1d553e081a459f508b14076293feeb",
"assets/assets/menu/soup/image5.jpg": "715a147a387e2570b697f268baed32de",
"assets/assets/menu/soup/image1.jpg": "91a5da2c02fd2c868b085aab6f3510d9",
"assets/assets/menu/soup/image2.jpg": "e237cfb5bfbd929cfae19bc7c4320da5",
"assets/assets/menu/soup/image3.jpg": "a9b176ad18ea3bf977ce30caa9f48d17",
"assets/assets/menu/dryAgedSteaks/image4.jpg": "2e8b0e51b978dd6b1d872e05c95bf0b4",
"assets/assets/menu/dryAgedSteaks/image5.jpg": "991897dffcf2a52ceea7354b44f163fe",
"assets/assets/menu/dryAgedSteaks/image1.jpg": "e1858e7288819da17c6bfd56ef54925b",
"assets/assets/menu/dryAgedSteaks/image2.jpg": "b51d6efdff4d222557f7061ae88afbc0",
"assets/assets/menu/dryAgedSteaks/image3.jpg": "b1f209e2e65b535a038770a6fc9bc483",
"assets/assets/sydykova.json": "a64f8044a4c9476976993a2b45c1e873",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
