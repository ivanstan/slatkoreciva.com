class BlogService {

    // public url = 'https://content.ivanstanojevic.me/slatkoreciva/blog?_format=json'
    public url = 'https://content.ivanstanojevic.me/scs/blog?_format=json'

    private collection: any[] = []

    public async getCollection() {

        if (this.collection.length === 0) {
            const response = await fetch(this.url)
            this.collection = await response.json()
        }

        return this.collection
    }

    public async getPost(id: any) {
        if (this.collection.length === 0) {
            await this.getCollection()
        }

        for (let i in this.collection) {
            const nid = this.collection[i].nid[0].value;

            if (parseInt(nid) === parseInt(id)) {
                return this.collection[i];
            }

        }

        return null;
    }
}

export const Blog = new BlogService()
