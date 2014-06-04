if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.form_test = {
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
					defaultValue: 'input ur name here',
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
	returnURL: '',
};
