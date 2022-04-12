function Produit(code,designation,prix,Qte,dtFabrications,nbJours=10) {
    // Attributes
    this.code=code;
    this.designation=designation;
    this.prix=prix;
    this.nbJours=nbJours;
    this.Qte=Qte;
    this.dtFabrications=dtFabrications;
    // Methods

    this.acheter=function (nv_Qte) {
        this.Qte+=nv_Qte;
    }
    this.vendre=function (qte) {
        this.Qte-=qte
    }
    this.getDatePresenption=function () {
        return this.dtFabrications;
    }

}

let produits=[
    new Produit(1,'clavier',250,15,new Date(2015,11,9).toDateString(),5),
    new Produit(2,'mouse',50,5,new Date(2017,5,3).toDateString(),10),
    new Produit(3,'Monitor',700,3,new Date(2022,10,7).toDateString()),
    new Produit(4,'CPU',1500,2,new Date(2019,2,2).toDateString(),20),
    new Produit(5,'RAM',400,5,new Date(2021,6,21).toDateString(),15),
    new Produit(6,'SSD',900,4,new Date(2020,5,12).toDateString(),15),
]

let col=document.getElementById('col1');
let page=''
for (let produit of produits){    
    let cardHTML=`
    <div class="col" >

    <div class="card hovered p-5 m-5 shadow-lg" style="width: 18rem; height:25rem; ">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body ">
            <h5 class="card-title">Code : <span class="text-warning">${produit.code}</span></h5>
            <p class="card-text">Designation: <span class="text-warning">${produit.designation}</span></p>
            </div>
            <ul class="list-group list-group-flush hovered shadow-lg">
            <li class="list-group-item">Qantete: <span class="text-warning">${produit.Qte}</span></li>
            <li class="list-group-item">Prix: <span class="text-warning">${produit.prix}</span></li>
            <li class="list-group-item">Nbr Jours: <span class="text-warning">${produit.nbJours}</span></li>
            <li class="list-group-item">Date Fabrication: <span class="text-warning">${produit.dtFabrications}</span></li>
            </ul>
            <div class="card-body">
            <a href="#" class="card-link">Add to cart</a>
            </div>
        </div>
    </div>
        `;
    page+=cardHTML;
    
    }
col.innerHTML=page;
document.body.appendChild(col)