class Github {
    constructor(){
        this.client_id = '58cdad700ae021ba7846';
        this.client_secret = '0aaf6149fc1f27dd5ff89a2942a4db8b414422e2';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}