const commonAssetList = [
	// Home Section
	{
		key: 'EnvMap-Industrial',
		path: './assets/envMap/Industrial/',
		type: 'EnvMap'
	},
	{
		key: 'Model-FF7',
		path: './assets/models/FF7.glb',
		type: 'Model'
	},
	{
		key: 'Texture-Cloud',
		path: require('../assets/images/7.png'),
		type: 'Texture'
	},
	{
		key: 'Texture-Aerith',
		path: require('../assets/images/5.png'),
		type: 'Texture'
	},
	{
		key: 'Font-Lato',
		path: './assets/fonts/Lato.fnt',
		type: 'Font'
	},
	{
		key: 'Texture-Lato',
		path: './assets/fonts/Lato.png',
		type: 'Texture'
	},
	// Gallery Section
	{
		key: 'Texture-Diamond1',
		path: require('../assets/images/983837.png'),
		type: 'Texture'
	},
	{
		key: 'Texture-Diamond2',
		path: require('../assets/images/developer.png'),
		type: 'Texture'
	},
	{
		key: 'Texture-Binguo1',
		path: require('../assets/images/bingua4.png'),
		type: 'Texture'
	},
	{
		key: 'Texture-Binguo2',
		path: require('../assets/images/Binguo1.jpg'),
		type: 'Texture'
	},
	{
		key: 'Texture-STM1',
		path: require('../assets/images/4.png'),
		type: 'Texture'
	},
	{
		key: 'Texture-STM2',
		path: require('../assets/images/1109789.png'),
		type: 'Texture'
	},
	// Work Section
	{
		key: 'EnvMap-Milkyway',
		path: './assets/envMap/Milkyway/',
		type: 'EnvMap',
		opts: {
			needBG: true
		}
	},
	{
		key: 'Model-Chess',
		path: './assets/models/Chess/scene.gltf',
		type: 'Model'
	},
];

const PCPreloadConfigList = [
	{
		key: 'Texture-NGNL1',
		path: require('../assets/images/9.jpg'),
		type: 'Texture'
	},
	{
		key: 'Texture-OnePunch1',
		path: require('../assets/images/11.jpg'),
		type: 'Texture'
	}
].concat(commonAssetList);

const MobilePreloadConfigList = [
	{
		key: 'Texture-NGNL1',
		path: require('../assets/images/mobile/9.png'),
		type: 'Texture'
	},
	{
		key: 'Texture-OnePunch1',
		path: require('../assets/images/mobile/11.png'),
		type: 'Texture'
	}
].concat(commonAssetList);

export { MobilePreloadConfigList, PCPreloadConfigList };
