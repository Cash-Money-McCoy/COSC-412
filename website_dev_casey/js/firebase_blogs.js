 var firebaseConfig = {
		apiKey: "AIzaSyAcqojqKHjzr0qB6Lv4GHgcps0fZ-0Fgbo",
		authDomain: "cosc-412.firebaseapp.com",
		databaseURL: "https://cosc-412.firebaseio.com",
		projectId: "cosc-412",
		storageBucket: "cosc-412.appspot.com",
		messagingSenderId: "181251574498",
		appId: "1:181251574498:web:ee0f28fed7b08fcc"
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);
	  
	  
	  // User auth
	  // FirebaseUI config.

      // Initialize the FirebaseUI Widget using Firebase.
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', {
	  
	  signInOptions: [
		{
		  provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		  scopes: [
			'https://www.googleapis.com/auth/contacts.readonly'
		  ],
		  customParameters: {
			// Forces account selection even when one account
			// is available.
			prompt: 'select_account'
		  }
		},
		{
		  provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		  scopes: [
			'public_profile',
			'email',
			'user_likes',
			'user_friends'
		  ],
		  customParameters: {
			// Forces password re-entry.
			auth_type: 'reauthenticate'
		  }
		},
		firebase.auth.TwitterAuthProvider.PROVIDER_ID, // Twitter does not support scopes.
		firebase.auth.EmailAuthProvider.PROVIDER_ID // Other providers don't need to be given as object.
	  ]
	  });

	
	// test display
	
	var version = 'v4'

	var limit = 5;
	var count = 0;
	var trueData = 4;
	var flag = true;
	var articles = [];
	var totalData = 0;

	firebase.database().ref('/'+ version  + '/article_group/article_list')
	  .orderByChild('published').limitToLast(limit).startAt(1)
		.on('child_added', function(data) {
		
		firebase.database().ref('/'+ version  +'/article_group/article/' + data.key)
		  .on('value', function(articleData) {
			count ++;
			articles.push({
				id: data.key,
			  published: data.val().published,
			  data: articleData.val()
			});
			articles.sort(function(a, b) {
			  console.log(a.published)
			  return a.published < b.published
			});
			producer();
			
		  }, function(err) {
			count ++;
			showError(err);
			producer()
		  });
	  }, function(err) {
		alert(err);
	  })
	  
	function producer() {
	  console.log(count, trueData)
	  if (count === trueData && flag) {
		for (var i in articles) {
		  createArticle(articles[i].id, articles[i].published, articles[i].data)
		}
		flag = false
	  }
	}
	  
	function showError(err) {
		var el = document.createElement('div');
	  el.innerHTML = err.message
	  document.getElementById('content').appendChild(el)
	}
	  
	function createArticle(id, published, data) {
		
		console.log(data)
		
		var fileReader = new FileReader()
		
		var el = document.createElement('div');
		el.className = 'card mb-4';
		
		var el2 = document.createElement('div');
		el2.className = 'card-body';
		el.appendChild(el2)
		
		var row = document.createElement('div');
		row.className = 'row'
		el2.appendChild(row)
		
		var col = document.createElement('div')
		col.className = 'col-lg-6'
		row.appendChild(col)
		
		var image = document.createElement('img')
		image.className = 'img-fluid rounded'
		col.appendChild(image)
		
		var col2 = document.createElement('div')
		col2.className = 'col-lg-6'
		row.appendChild(col2)
		
		var title = document.createElement('h2')
		title.className = 'card-title'
		col2.appendChild(title)
		
		var body = document.createElement('p')
		body.className = 'card-text'
		col2.appendChild(body)
		
		var footer = document.createElement('div')
		footer.className = 'card-footer text-muted'
		el.appendChild(footer)
		
		title.innerHTML = data.title
		image.src = data.img
		body.innerHTML = data.body
		footer.innerHTML = 'Posted on: ' + new Date(published) + ' by : '+ data.uid;
		
		document.getElementById('content').appendChild(el)

	}

	var submitButton = document.querySelector('#submit-button');
	var titleText = document.querySelector('#title');
	var bodyText = document.querySelector('#body');
	var imgData;
	
	function encodeImageFileAsURL() {

		var filesSelected = document.getElementById("inputFileToLoad").files;
		if (filesSelected.length > 0) {
			var fileToLoad = filesSelected[0];
			
			console.log(filesSelected)
		  
			var fileReader = new FileReader();

			fileReader.onload = function(fileLoadedEvent) {
				imgData = fileLoadedEvent.target.result; // <--- data: base64
				document.querySelector('img').src = imgData
			}
			fileReader.readAsDataURL(fileToLoad);
		}
		
	}

	submitButton.addEventListener('click', function(){
		
		if (firebase.auth().currentUser == null){
			alert("You must be signed in to post")
			return
		}
		
		var title = titleText.value;
		var body = bodyText.value;
		var userName = firebase.auth().currentUser.displayName;
		var image = imgData;
		var articleRef = version  +'/article_group/';
		var articleData = {
			title: title,
			body: body,
			img: image,
			date_edited: firebase.database.ServerValue.TIMESTAMP,
			uid: userName,
			slug_name: title.replace(/\s/g, '-')
		};
		var key = firebase.database().ref(articleRef + 'article').push().key;
	  
		var updates = {};
		updates[articleRef + 'article/' + key] = articleData;
		updates[articleRef + 'article_list/' + key] = {
			published: firebase.database.ServerValue.TIMESTAMP
		}
	  
		return firebase.database().ref().update(updates)
		.then(function(){
			alert('Added '+ title);
		})
		.catch(function(error) {
		console.log(error);
		alert(error.message)
		});
	  
	});