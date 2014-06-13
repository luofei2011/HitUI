if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.form_test = [
	{
	// first form
	formName: 'Test_Form',
	groups: [
		{
			groupName: 'Login Infomation',
			showFrame: true,
			items: [
				{
					name: '110',
					label: 'Name',
					type: 'text',
					required: true,
					sizeLevel: 2,
					defaultValue: 'input ur name here',
				},{
					name: '123',
					label: 'Password',
					type: 'password',
					required: true,
					sizeLevel: 2,
					defaultValue: 'input ur password here',
				},{
					name: '111',
					label: 'Nation',
					type: 'checkbox',
					required: true,
					sizeLevel: 2,
					defaultValue: [1,2],
					selections: [
						'China',
						'Amarica',
						'Japan',
						'Korea',
					],
				},{
					name: '10',
					label: 'location',
					type: 'list',
					required: false,
					sizeLevel: 2,
					defaultValue: 3,
					selections: [
						'China',
						'Amarica',
						'Japan',
						'Korea',
						'Brazil',
					],
				},{
					name: '10333',
					label: 'location',
					type: 'radio',
					required: false,
					sizeLevel: 2,
					defaultValue: 3,
					selections: [
						'China',
						'Amarica',
						'Japan',
						'Korea',
						'Brazil',
						'Canada',
					],
				},
			],
		},{
			groupName: 'stupid Group',
			showFrame: false,
			items: [
				{
					name: '99',
					label: 'Address',
					type: 'text',
					required: false,
					sizeLevel: 1,
					defaultValue: 'input ur name here',
				},{
					name: '999',
					label: 'Sex',
					type: 'text',
					required: true,
					sizeLevel: 2,
					defaultValue: 'input ur name here',
					selections: [
						'China',
						'Amarica',
						'Japan',
						'Korea',
						'Brazil',
					],
				},{
					name: '9999',
					label: 'Age',
					type: 'number',
					required: false,
					sizeLevel: 4,
					defaultValue: 3,
					selections: [
						16,
						60,
					],
				},{
					name: '99999',
					label: 'Name',
					type: 'text',
					required: false,
					sizeLevel: 4,
					defaultValue: 'input ur name here',
				},					
			],
		},
	],
	returnURL: {
		type: 'DB',
		config: {
			dbName: '',
			dbTable: '',
		},
	},

	//end form
	}, 
	{
	//second form
	formName: 'SMALL_Test_Form',
	groups: [
		{
			groupName: 'simple form',
			showFrame: true,
			items: [
				{
					name: '00001',
					label: 'Name',
					type: 'text',
					required: true,
					sizeLevel: 1,
					defaultValue: 'I AM THE HELLO WORLD',
					key: true,
				},{
					name: '00002',
					label: 'Age',
					type: 'number',
					required: true,
					sizeLevel: 4,
					defaultValue: '4',
					selections: [
						16,
						60,
					],
					key: false,
				},{
					name: '00003',
					label: 'Date',
					type: 'date',
					required: true,
					sizeLevel: 2,
					defaultValue: '1992-01-05',
					selections: [
						'1992-02-20',
						'2014-06-08',
					],
				},{
					name: '00004',
					label: 'time',
					type: 'time',
					required: true,
					sizeLevel: 4,
					defaultValue: '19:04',
					selections: [
						'03:11',
						'04:02',
					],
				},{
					name: '00005',
					label: 'POUP',
					type: 'poup',
					required: true,
					sizeLevel: 2,
					defaultValue: '',
					selections: [],
				},
			],
		},
	],
	buttons: [
		{
			name: '提交',
			id: 'submit',
			type: 'submit',
		},
	],
	returnURL: {
		type: 'DB',
		config: {
			dbName: '',
			dbTable: '',
		},
	},
	//end second form
	}
];
