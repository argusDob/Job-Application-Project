

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
		developerKey :'AIzaSyAzp6SxayT8DjXAMPx-k2KttJxYmKbDmUw',
		clientId : "310009666215-4bc907ejc1fv0l5eav6pdpmmm46cj8kc.apps.googleusercontent.com",
		 appId : "310009666215",
		scope : ['https://www.googleapis.com/auth/drive'],
		pickerApiLoaded : false,



	},
	methods: {
		checkForm: function (e) {

			this.errors = [];


			if (!this.name) {

				var set = document.getElementById("name").style.border = "solid 1px red";
				document.getElementById("name-icon").style.display = "none";

				console.log(set);

			} else {
				document.getElementById("name-icon").style.display = "inline-block";
				document.getElementById("name").style.border = "1px solid #ccc";
			}


			if (!this.surname) {

				var set = document.getElementById("surname").style.border = "solid 1px red";
				document.getElementById("surname-icon").style.display = "none";

			} else {
				document.getElementById("surname-icon").style.display = "inline-block";
				document.getElementById("surname").style.border = "1px solid #ccc";
			}

			if (!this.tel) {
				document.getElementById("tel").style.border = "solid 1px red";
				document.getElementById("tel-icon").style.display = "none";
			} else if (!this.validTel(this.tel)) {
				console.log("dsafdaginame")
				document.getElementById("tel").style.border = "solid red";
				document.getElementById("tel-icon").style.display = "none";
			} else {
				console.log("dadaasasfdsagafsg131342314213");
				document.getElementById("tel-icon").style.display = "inline-block";
				document.getElementById("tel").style.border = "1px solid #ccc";

			}


			if (!this.email) {
				document.getElementById("email").style.border = "solid 1px red";
				document.getElementById("email-icon").style.display = "none";
			} else if (!this.validEmail(this.email)) {
				document.getElementById("email").style.border = "solid 1px red";
				document.getElementById("email-icon").style.display = "none";
			} else {
				document.getElementById("email-icon").style.display = "inline-block";
				document.getElementById("email").style.border = "1px solid #ccc";

			}


			if (!this.date) {
				document.getElementById("date").style.border = "solid 1px red";
				document.getElementById("date-icon").style.display = "none";



			} else {
				document.getElementById("date-icon").style.display = "inline-block";
				document.getElementById("date").style.border = "1px solid #ccc";
			}


			if (!this.country) {
				document.getElementById("country").style.border = "solid 1px red";
				document.getElementById("country-icon").style.display = "none";



			} else {
				document.getElementById("country-icon").style.display = "inline-block";
				document.getElementById("country").style.border = "1px solid #ccc";
			}


			if (!this.city) {
				document.getElementById("city").style.border = "solid 1px red";
				document.getElementById("city-icon").style.display = "none";
			} else {
				document.getElementById("city-icon").style.display = "inline-block";
				document.getElementById("city").style.border = "1px solid #ccc";
			}


			if (!this.post) {
				document.getElementById("post").style.border = "solid 1px red";
				document.getElementById("post-icon").style.display = "none";
			} else if (!this.validPost(this.post)) {
				document.getElementById("post").style.border = "solid red";
				document.getElementById("post-icon").style.display = "none";
			} else {
				console.log("dadaasasfdsagafsg131342314213");
				document.getElementById("post-icon").style.display = "inline-block";
				document.getElementById("post").style.border = "1px solid #ccc";

			}





			e.preventDefault();
		},

		checkUpload: function (e) {
			const file = this.$refs.file.files[0];



			if (file.size > 1024 * 1024) {
				e.preventDefault();
				alert('File too big (> 1MB)');
				return;
			}

			document.getElementById("files_checked").style.display = "inline-table"
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
		
		loadPicker:function(){
	 gapi.load('auth', {'callback': onAuthApiLoad});
      gapi.load('picker', {'callback': onPickerApiLoad});
		
	},
		
	  onAuthApiLoad:function() {
      window.gapi.auth.authorize(
          {
            'client_id': clientId,
            'scope': scope,
            'immediate': false
          },
          handleAuthResult);
    },
		
	onPickerApiLoad: function() {
      pickerApiLoaded = true;
      createPicker();
    },
	
	  handleAuthResult:function(authResult) {
      if (authResult && !authResult.error) {
        oauthToken = authResult.access_token;
        createPicker();
      }
    },
	  createPicker:function() {
      if (pickerApiLoaded && oauthToken) {
          var view = new google.picker.DocsView()
                .setIncludeFolders(false)
                .setMimeTypes('application/vnd.google-apps.folder,image/png,image/jpeg,image/jpg,text/plain,application/pdf,\n\
        application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/x-vnd.oasis.opendocument.spreadsheet,\n\
        text/csv,image/svg+xml,application/vnd.openxmlformats-officedocument.presentationml.presentation')
                .setSelectFolderEnabled(false);
        var picker = new google.picker.PickerBuilder()
            .enableFeature(google.picker.Feature.NAV_HIDDEN)
            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
            .setAppId(appId)
            .setOAuthToken(oauthToken)
            .addView(view)
            .addView(new google.picker.DocsUploadView())
            .setDeveloperKey(developerKey)
            .setCallback(pickerCallback)
            .build();
         picker.setVisible(true);
      }
    },
		
      pickerCallback: function(data) {
      if (data.action == google.picker.Action.PICKED) {
        var fileId = data.docs[0].id;
        alert('The user selected: ' + fileId);
      }
    }

		
	
		
	
		
		


	}
})
