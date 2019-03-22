//my instance

const app = new Vue({
	el: '#app',
	data: {
		errors: [],
		name: null,
		surname: null,
		tel: null,
		email: null,
		date: null,
		country: null,
		city: null,
		post: null,
		motivation: null,
		developerKey: 'AIzaSyAzp6SxayT8DjXAMPx-k2KttJxYmKbDmUw',
		clientId: "310009666215-4bc907ejc1fv0l5eav6pdpmmm46cj8kc.apps.googleusercontent.com",
		appId: "310009666215",
		scope: ['https://www.googleapis.com/auth/drive'],
		pickerApiLoaded: false,
		token: "",
		path: 0,
		dataLoad: 0,
		seen: false,
		page1: false,
		page3: true,
		filesSelected: 0,

	},
	methods: {
		checkForm: function (e) {

			this.errors = [];


			if (!this.name) {
				this.errors.push('Name required.');
				var set = document.getElementById("name").style.border = "solid 1px red";
				document.getElementById("name-icon").style.display = "none";



			} else {
				document.getElementById("name-icon").style.display = "inline-block";
				document.getElementById("name").style.border = "1px solid #ccc";
			}


			if (!this.surname) {
				this.errors.push('Surname required.');
				var set = document.getElementById("surname").style.border = "solid 1px red";
				document.getElementById("surname-icon").style.display = "none";

			} else {
				document.getElementById("surname-icon").style.display = "inline-block";
				document.getElementById("surname").style.border = "1px solid #ccc";
			}

			if (!this.tel) {
				this.errors.push('Phone number required.');
				document.getElementById("tel").style.border = "solid 1px red";
				document.getElementById("tel-icon").style.display = "none";
			} else if (!this.validTel(this.tel)) {
				this.errors.push('Dutch phone number required.');
				console.log("dsafdaginame")
				document.getElementById("tel").style.border = "solid red";
				document.getElementById("tel-icon").style.display = "none";
			} else {
				console.log("dadaasasfdsagafsg131342314213");
				document.getElementById("tel-icon").style.display = "inline-block";
				document.getElementById("tel").style.border = "1px solid #ccc";

			}


			if (!this.email) {
				this.errors.push('Email address required.');
				document.getElementById("email").style.border = "solid 1px red";
				document.getElementById("email-icon").style.display = "none";
			} else if (!this.validEmail(this.email)) {
				this.errors.push('A valid eimail address required.');
				document.getElementById("email").style.border = "solid 1px red";
				document.getElementById("email-icon").style.display = "none";
			} else {
				document.getElementById("email-icon").style.display = "inline-block";
				document.getElementById("email").style.border = "1px solid #ccc";

			}


			if (!this.date) {
				this.errors.push('Date required.');
				document.getElementById("date").style.border = "solid 1px red";
				document.getElementById("date-icon").style.display = "none";



			} else {
				document.getElementById("date-icon").style.display = "inline-block";
				document.getElementById("date").style.border = "1px solid #ccc";
			}





			if (!this.motivation) {
				this.errors.push('Motivation required.');
				document.getElementById("motivation").style.border = "solid 1px red";
				document.getElementById("motivation-icon").style.display = "none";



			} else {
				document.getElementById("motivation-icon").style.display = "inline-block";
				document.getElementById("motivation").style.border = "1px solid #ccc";
			}


			if (!this.city) {
				this.errors.push('City required.');
				document.getElementById("city").style.border = "solid 1px red";
				document.getElementById("city-icon").style.display = "none";
			} else {
				document.getElementById("city-icon").style.display = "inline-block";
				document.getElementById("city").style.border = "1px solid #ccc";
			}


			if (!this.country) {
				this.errors.push('Country required.');
				document.getElementById("country").style.border = "solid 1px red";
				document.getElementById("country-icon").style.display = "none";
			} else {
				document.getElementById("country-icon").style.display = "inline-block";
				document.getElementById("country").style.border = "1px solid #ccc";
			}


			if (!this.post) {
				this.errors.push('Post Code required.');
				document.getElementById("post").style.border = "solid 1px red";
				document.getElementById("post-icon").style.display = "none";
			} else if (!this.validPost(this.post)) {
				this.errors.push('A valid post code required.');
				document.getElementById("post").style.border = "solid red";
				document.getElementById("post-icon").style.display = "none";
			} else {
				document.getElementById("post-icon").style.display = "inline-block";
				document.getElementById("post").style.border = "1px solid #ccc";

			}

			e.preventDefault(e);



			var file = this.$refs.file.files[0];
			var file1 = this.$refs.file1.files[0];
			var file2 = this.$refs.file2.files[0];



			if (!file) {
				e.preventDefault();
				this.errors.push('Photo required.');
				return
			} else {
				document.getElementById("files_checked_photo").style.display = "inline-table"
			}

			if (!file1) {
				e.preventDefault();
				this.errors.push('Resume required.');
				return;
			} else {
				document.getElementById("files_checked-resume").style.display = "inline-table"
			}



			if (!file2) {
				e.preventDefault();
				this.errors.push('Portfolio required.');
				return;
			} else {
				document.getElementById("files_checked-port").style.display = "inline-table"
			}





			e.preventDefault(e);

		},



		validEmail: function (email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},

		validPost: function (post) {
			var re = /^\d{4} ?[a-z]{2}$/i;
			return re.test(post);
		},

		validTel: function (tel) {
			var re = /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/i;
			return re.test(tel);

		},

		topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		},

		loadPicker: function () {
			console.log("hi")
			gapi.load('auth', {
				'callback': app.onAuthApiLoad
			});
			gapi.load('picker', {
				'callback': app.onPickerApiLoad
			});

		},

		onAuthApiLoad: function () {
			console.log("yo")

			window.gapi.auth.authorize({
					'client_id': app.clientId,
					'scope': app.scope,
					'immediate': false
				},
				app.handleAuthResult);

		},
		onPickerApiLoad: function () {
			console.log("hi2")
			app.pickerApiLoaded = true;
			app.createPicker();
		},
		handleAuthResult: function (authResult) {
			console.log("hi3")
			if (authResult && !authResult.error) {
				oauthToken = authResult.access_token;
				console.log(oauthToken)
				app.token = oauthToken;
				app.createPicker();
			}
		},
		createPicker: function () {
			if (app.pickerApiLoaded && app.token) {
				var view = new google.picker.DocsView()
					.setIncludeFolders(false)
					.setMimeTypes('image/png,image/jpeg,image/jpg,text/plain,application/pdf,application/docx')
					.setSelectFolderEnabled(false);
				var picker = new google.picker.PickerBuilder()
					.enableFeature(google.picker.Feature.NAV_HIDDEN)
					.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
					.setAppId(app.appId)
					.setOAuthToken(app.token)
					.addView(view)
					.addView(new google.picker.DocsUploadView())
					.setDeveloperKey(app.developerKey)
					.setCallback(app.pickerCallback)
					.build();
				picker.setVisible(true);
			}
		},

		pickerCallback: function (data) {
			if (data.action == google.picker.Action.PICKED) {
				var fileId = data.docs[0].id;
				alert('The user selected: ' + fileId);
			}
		},

		page2: function () {
			app.path = 1;
			window.scrollTo({ top: 0, behavior: 'smooth' });
			
		},

		goBack: function () {
			app.path = 0
			
			window.scrollTo({ top: 0, behavior: 'smooth' });
			
		},
				
		contRead: function () {
			app.path = 3
		},

		openNav: function () {
			document.getElementById("myNav").style.width = "100%";
		},
		closeNav: function () {
			document.getElementById("myNav").style.width = "0%";
		}









	}
})
