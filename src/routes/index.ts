import { RequestHandler, Response, Router } from 'express';


class IndexRoutes {

    router: Router;

    constructor() {
        
        this.router = Router();
        this.routes();
    }

    routes() {

        this.router.get('/', (req, res) => res.send('Api: /api/post'));

    }
   
}
const indexRoutes = new IndexRoutes();
indexRoutes.routes();
export default indexRoutes.router;