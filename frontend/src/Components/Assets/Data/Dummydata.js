// Assets
import image1 from "../image1.jpg";
import image2 from "../image2.jpg";
import image3 from "../image3.jpg";
import image4 from "../image4.jpg";
import image5 from "../image5.jpg";
import image6 from "../image6.jpg";
import image7 from "../image7.jpg";
import image8 from "../image8.jpg";
import image9 from "../image9.jpg";
import image10 from "../image10.jpg";
import image11 from "../image11.jpg";
import image12 from "../image12.jpg";
import image13 from "../image13.jpg";
import image14 from "../image14.jpg";
import image15 from "../image15.jpg";
import image16 from "../image16.jpg";

const myListings = [
	{
		id: 1,
		title: "Căn hộ cho thuê",
		listing_type: "Apartment",
		description:
			"Duis irure tempor enim commodo laborum incididunt quis laborum laboris laborum. Nulla aliqua nisi ipsum velit id consectetur minim. Sunt quis adipisicing ex irure cupidatat sit elit ut veniam duis consectetur. Amet culpa nostrud magna fugiat cillum mollit enim do velit aliquip velit officia nulla ad. Qui enim est ipsum do.",
		division: "Inner London",
		borough: "Camden",
		property_status: "Rent",
		price: 410000,
		rental_frequency: "Day",
		rooms: 4,
		furnished: false,
		pool: false,
		elevator: true,
		cctv: true,
		parking: true,
		location: {
			type: "Point",
			coordinates: [10.734287730640004, 106.62694553528176],
		},
		picture1: image1,
	},
	{
		id: 2,
		title: "Bán nhà đường Trần Văn Kiểu",
		listing_type: "House",
		description:
			"Proident amet anim aute excepteur laboris velit duis velit aliqua. Minim sunt aliquip anim commodo et laborum cillum anim occaecat labore sunt elit exercitation commodo. Sit ex voluptate tempor elit ut ex deserunt. Fugiat nisi Lorem ex sint veniam id voluptate enim deserunt culpa cupidatat aute duis duis. Anim aute ullamco nisi consequat. Enim amet do consequat fugiat consequat do officia laboris consectetur culpa eiusmod exercitation. Incididunt eu fugiat est veniam amet eiusmod Lorem reprehenderit aliquip veniam anim nostrud sit.",
		division: "Inner London",
		borough: "Islington",
		property_status: "Sale",
		price: 35000,
		rental_frequency: null,
		rooms: 4,
		furnished: true,
		pool: true,
		elevator: false,
		cctv: true,
		parking: true,
		location: {
			type: "Point",
			coordinates: [10.73241059191734, 106.62652809283405],
		},
		picture1: image2,
	},
	{
		id: 3,
		title: "Bán nhà đường số 44",
		listing_type: "House",
		description:
			"In velit laborum voluptate nulla. Anim deserunt mollit fugiat velit elit minim nisi officia occaecat dolor veniam ex ea commodo. Sunt occaecat exercitation aliquip deserunt sint ex laboris dolore elit nulla.",
		division: "Outer London",
		borough: "Ealing",
		property_status: "Sale",
		price: 35000000,
		rental_frequency: null,
		rooms: 4,
		furnished: true,
		pool: false,
		elevator: false,
		cctv: true,
		parking: false,
		location: {
			type: "Point",
			coordinates: [10.735937036893704, 106.62581198433577],
		},
		picture1: image3,
	},
	{
		id: 4,
		title: "Chuyển nhượng văn phòng",
		listing_type: "Office",
		description:
			"Occaecat labore tempor est consequat ea et ut adipisicing ipsum officia amet. Incididunt proident nisi nulla laborum occaecat ut cupidatat consectetur nulla magna. Do esse minim voluptate exercitation do pariatur irure labore aliquip fugiat. Exercitation esse et proident ex ex laborum labore eu veniam. Proident laboris enim officia nostrud do occaecat in ut ex veniam veniam ex tempor ad. Nostrud exercitation ad nulla commodo cillum adipisicing commodo magna cupidatat aliqua in consequat labore amet.",
		division: "Inner London",
		borough: "Lambeth",
		property_status: "Sale",
		price: 2000000,
		rental_frequency: null,
		rooms: 4,
		furnished: true,
		pool: false,
		elevator: true,
		cctv: true,
		parking: false,
		location: {
			type: "Point",
			coordinates: [10.736756812256395, 106.62342958808489],
		},
		picture1: image4,
	},

	{
		id: 5,
		title: "Nhà bán An Dương Vương",
		listing_type: "House",
		description:
			"Cillum commodo qui officia occaecat culpa minim ea proident adipisicing nisi cillum qui veniam. Sit esse voluptate amet ad elit ex irure. Ea ex quis tempor pariatur deserunt consequat magna exercitation.",
		division: "Outer London",
		borough: "Enfield",
		property_status: "Sale",
		price: 5000000,
		rental_frequency: null,
		rooms: 4,
		furnished: true,
		pool: true,
		elevator: false,
		cctv: false,
		parking: true,
		location: {
			type: "Point",
			coordinates: [10.736202390038702, 106.6215805721671],
		},
		picture1: image5,
	},

	{
		id: 6,
		title: "Căn hộ cho thuê",
		listing_type: "Apartment",
		description:
			"Excepteur quis non aliqua eu duis laboris ut nulla. Fugiat minim mollit mollit amet cupidatat. Cupidatat mollit excepteur in enim velit nostrud aliqua ad aute. Ullamco Lorem irure incididunt aliqua proident velit enim culpa ad. Esse do voluptate adipisicing ex culpa proident cupidatat culpa fugiat. Ullamco deserunt commodo mollit nulla fugiat officia velit.",
		division: "Outer London",
		borough: "Barnet",
		property_status: "Rent",
		price: 150,
		rental_frequency: "Day",
		rooms: 4,
		furnished: false,
		pool: true,
		elevator: true,
		cctv: true,
		parking: false,
		location: {
			type: "Point",
			coordinates: [10.739273085703156, 106.62369551081527],
		},
		picture1: image6,
	},

	{
		id: 7,
		title: "Căn hộ cho thuê Bình Phú",
		listing_type: "Apartment",
		description:
			"Ex exercitation sit nulla deserunt sint ullamco elit Lorem magna elit mollit. Reprehenderit elit laborum ea sint proident in sunt ad sit commodo sunt eu. Ad ea occaecat do eu. Do laborum sint non exercitation exercitation quis dolor excepteur in velit. Esse laboris enim irure do. Adipisicing magna occaecat adipisicing ex exercitation. Sit officia ut laborum aliquip ex dolore.",
		division: "Outer London",
		borough: "Bexley",
		property_status: "Rent",
		price: 3600,
		rental_frequency: "Month",
		rooms: 4,
		furnished: true,
		pool: true,
		elevator: true,
		cctv: true,
		parking: false,
		location: {
			type: "Point",
			coordinates: [10.74148403373715, 106.62958564494866],
		},
		picture1: image7,
	},

	{
		id: 8,
		title: "Văn Phòng Cho Thuê Chợ Lớn",
		listing_type: "Office",
		description:
			"Magna eu cillum nostrud ullamco do minim reprehenderit dolore eu. Adipisicing dolor sunt adipisicing ea consequat proident. Esse id eu nostrud laboris.",
		division: "Outer London",
		borough: "Croydon",
		property_status: "Rent",
		price: 750,
		rental_frequency: "Week",
		rooms: 4,
		furnished: true,
		pool: false,
		elevator: true,
		cctv: false,
		parking: true,
		location: {
			type: "Point",
			coordinates: [10.742519671149417, 106.62592174603262],
		},
		picture1: image8,
	},

	{
		id: 9,
		title: "Nhà bán đường 25",
		listing_type: "House",
		description:
			"Pariatur velit do deserunt consectetur quis cupidatat officia dolore aute. Anim sunt dolor quis laboris enim amet labore commodo. Velit adipisicing officia incididunt ipsum sunt ipsum minim enim consectetur exercitation quis. Irure est voluptate dolor esse ex. Veniam nisi excepteur ut enim quis eiusmod eiusmod cillum officia veniam nostrud duis quis eu. Aliqua Lorem Lorem nisi eu eiusmod exercitation ad laborum duis id tempor consectetur.",
		division: "Outer London",
		borough: "Hounslow",
		property_status: "Sale",
		price: 650000,
		rental_frequency: null,
		rooms: 4,
		furnished: true,
		pool: true,
		elevator: false,
		cctv: true,
		parking: true,
		location: {
			type: "Point",
			coordinates: [10.74270940572223, 106.62431242064505],
		},
		picture1: image9,
	},

	{
		id: 10,
		title: "Căn hộ mũi tàu",
		listing_type: "Apartment",
		description:
			"Tempor culpa amet laborum tempor excepteur consequat minim exercitation incididunt dolor ad. Exercitation cupidatat sit sint elit nisi aliquip in commodo ut pariatur ut voluptate exercitation exercitation. Exercitation enim duis deserunt do dolore aute dolor tempor ex irure.",
		division: "Inner London",
		borough: "Hackney",
		property_status: "Sale",
		price: 150000,
		rental_frequency: null,
		rooms: 4,
		furnished: true,
		pool: true,
		elevator: false,
		cctv: false,
		parking: true,
		location: {
			type: "Point",
			coordinates: [10.745299797141174, 106.6281748020735],
		},
		picture1: image10,
	},

	{
		id: 11,
		title: "Cho thuê nhà",
		listing_type: "House",
		description:
			"Do mollit quis laborum non fugiat tempor exercitation pariatur sint esse minim elit. Reprehenderit magna aute anim dolore adipisicing ipsum ipsum non aliquip in commodo. Ut mollit eu labore esse reprehenderit officia deserunt excepteur eiusmod fugiat non pariatur. Anim reprehenderit commodo nisi labore sunt velit id mollit eu. Pariatur reprehenderit sunt aliqua amet exercitation mollit consectetur nostrud cupidatat id ea Lorem. Cillum ad pariatur proident magna qui esse elit reprehenderit nisi. Eiusmod magna sunt veniam veniam sunt occaecat aliqua Lorem aliquip nostrud anim ex velit ipsum.",
		division: "Outer London",
		borough: "Bromley",
		property_status: "Rent",
		price: 500,
		rental_frequency: "Day",
		rooms: 4,
		furnished: true,
		pool: false,
		elevator: false,
		cctv: true,
		parking: true,
		location: {
			type: "Point",
			coordinates: [10.744922965915963, 106.62699462985132],
		},
		picture1: image11,
	},

	{
		id: 12,
		title: "Bán Văn phòng Đường 22",
		listing_type: "Office",
		description:
			"Fugiat mollit nostrud exercitation ullamco ex aute sunt consequat do est laboris minim proident. Nisi officia sit culpa irure tempor Lorem fugiat duis veniam velit occaecat laboris. Esse quis ullamco aute nisi. Et nisi duis cupidatat velit irure nulla qui in sunt laborum Lorem occaecat.",
		division: "Outer London",
		borough: "Merton",
		property_status: "Sale",
		price: 25000000,
		rental_frequency: null,
		rooms: 4,
		furnished: true,
		pool: true,
		elevator: false,
		cctv: false,
		parking: true,
		location: {
			type: "Point",
			coordinates: [10.743199552238936, 106.62284257053834],
		},
		picture1: image12,
	},

	{
		id: 13,
		title: "Bán nhà thuốc",
		listing_type: "House",
		description:
			"Nulla aliqua voluptate adipisicing reprehenderit voluptate consequat consequat excepteur adipisicing occaecat aliqua officia non ipsum. Exercitation ut et nisi ipsum aliquip eu dolor veniam do irure laborum nisi pariatur ut. Aliqua ullamco veniam eiusmod dolore pariatur nostrud et mollit eu cupidatat proident.",
		division: "Outer London",
		borough: "Havering",
		property_status: "Sale",
		price: 1000000,
		rental_frequency: null,
		rooms: 4,
		furnished: false,
		pool: true,
		elevator: false,
		cctv: true,
		parking: true,
		location: {
			type: "Point",
			coordinates: [10.738821182210096, 106.6239347890647],
		},
		picture1: image13,
	},

	{
		id: 14,
		title: "Căn hộ cho thuê",
		listing_type: "Apartment",
		description:
			"Ut laboris veniam ipsum ea exercitation nisi magna proident esse officia non magna. Voluptate elit culpa Lorem dolor duis exercitation exercitation labore laborum reprehenderit aliquip. Occaecat voluptate consectetur eu consequat Lorem. Officia velit ex reprehenderit cillum esse cillum sit cupidatat. Voluptate do dolore consequat incididunt exercitation consectetur et exercitation. Minim ea dolor non adipisicing. Minim amet amet id ullamco tempor irure aliqua ad culpa.",
		division: "Inner London",
		borough: "Wandsworth",
		property_status: "Rent",
		price: 2500,
		rental_frequency: "Week",
		rooms: 4,
		furnished: true,
		pool: true,
		elevator: false,
		cctv: true,
		parking: false,
		location: {
			type: "Point",
			coordinates: [10.745559734758153, 106.63895086436285],
		},
		picture1: image14,
	},

	{
		id: 15,
		title: "Văn phòng cho thuê",
		listing_type: "Office",
		description:
			"Id elit elit ad anim sunt nulla labore laborum aliqua. Tempor ut consequat pariatur anim sint sunt enim consectetur ullamco quis elit voluptate consectetur. Velit et ullamco minim est id excepteur consequat minim qui. Consectetur elit adipisicing officia magna magna excepteur elit id ea id elit nulla.",
		division: "Outer London",
		borough: "Redbridge",
		property_status: "Rent",
		price: 5000,
		rental_frequency: "Month",
		rooms: 4,
		furnished: true,
		pool: true,
		elevator: true,
		cctv: false,
		parking: true,
		location: {
			type: "Point",
			coordinates: [10.745338143433965, 106.63742166238322],
		},
		picture1: image15,
	},
];

export default myListings;
