Forgot = React.createClass({
	getInitialState: function(){
		return {
			email: '',
			confirmEmail: '',
			emailError: '',
			confirmEmailError: '',
			hide: 'hidden',
			emailNotFound: ''
		};
	},
	validateEmail: function(event){
		var email = event.target.value;
		if(!email.includes('@')){
      this.setState({emailError: 'not a valid email'});
      this.setState({hide:'hidden'});
    }
    else{
      this.setState({emailError: ''});
      this.setState({hide:''});
    }
    this.setState({email: event.target.value});
	},
	validateConfirmEmail: function(event){
		var confirmEmail = event.target.value;
		if(this.state.email !== confirmEmail){
			this.setState({confirmEmailError: 'Emails do not match'});
			this.setState({hide:'hidden'});
		}
		else{
			this.setState({confirmEmailError:''});
			this.setState({hide:''});
		}
		this.setState({confirmEmail: confirmEmail});
	},
	sendRecoveryEmail: function(){
		$.ajax({
			url:'/api/player/password/recover?email=' + this.state.email,
			dataType: 'json',
			type: 'GET',
			success: function(data){
				console.log('sent recovery email successfully')
			}.bind(this),
			error: function(err){
				this.setState({emailNotFound:'this email does not exist'})
				console.log('Password Recovery Email Error: ', err);
			}.bind(this)
		})
	},
	render: function(){
		return (
			<div>
				<form>
					<input type="text" value={this.state.email} onChange={this.validateEmail} placeholder="email"/>
					<br />
					<input type="text" value={this.state.confirmEmail} onChange={this.validateConfirmEmail} placeholder="confirm email"/>
					<br />
					<input type="submit" id="subButton" className={this.state.hide}/>
				</form>
				<div id="eError">{this.state.emailError}</div>
				<div id="eError">{this.state.confirmEmailError}</div>
				<div id="eError">{this.state.emailNotFound}</div>
			</div>)
	}
})