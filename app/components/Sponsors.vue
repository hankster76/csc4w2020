<template>
    <Page>
        <ActionBar title="Colorado Springs Christian 4-Wheelers" class="action-bar" />
        <StackLayout class="list-panel">
            <Label textWrap="true" class="header-label"
                text="Our Sponsors" />
            <Button class="button" text="About Our Sponsors" @tap="onAboutTap" />
            <ListView for="sponsor in sponsors" @itemTap="onItemTap" height="100%" separatorColor="white" class="list-panel" >
                <v-template>
                    <GridLayout columns="200,*" , rows="*,*">
                        <Image :src="sponsor.imagesrc" row="0" col="0" height="150" width="150" />
                        <Label :text="sponsor.name" class="listRightItem" textWrap="true" row="0" col="1"></Label>
                    </GridLayout>
                </v-template>
            </ListView>  
        </StackLayout>
    </Page>
</template>  

<script>
    import SponsorDetails from "./SponsorDetails";
    import AboutSponsors from "./AboutSponsors";
    import axios from "axios";

    export default {
        
        data: () => {
            return {
                sponsors: []
/*

        {
            "name": "4Wheel Parts", 
            "address": "5720 N. Academy Blvd, Colorado Springs, CO, 80918",
            "contact": " ",
            "imagesrc": "~/images/4wp.png", 
            "email": " ", 
            "phone": "(719)591-9400",
            "phone2": " ",
            "url": "http://www.4wheelparts.com",
            "bio": "4 Wheel Parts is your one-stop source for truck parts as well as parts for Jeeps & SUVs, with the nation’s largest inventory of off-road 4x4 products including tires, wheels, lift kits, winches, tonneau covers, fender flares, mud flaps, and more.  Featuring all the top brands like Pro Comp, Super Swamper, Fabtech, Warn and more, trust 4 Wheel Parts for all your off-road and 4x4 needs as well as utility truck parts."
        },
        {
            "name": "Perkins Motors", 
            "address": "1205 Motor City Drive, Colorado Springs, CO, 80905",
            "contact": " ",
            "imagesrc": "~/images/perkins.jpg", 
            "email": " ",
            "phone": "(719)475-2330",
            "phone2": " ", 
            "url": "https://www.perkinsmotors.com/",
            "bio": "Our Perkins Motor Company dealership in the Colorado Springs area offers a large inventory of vehicles as well as the services needed to care for your vehicle. Our service center technicians are certified with expertise in the Chrysler Dodge Jeep Ram brand. Our service department offers the parts and accessories your Chrysler Dodge Jeep Ram needs to stay safe on the road for many more years to come."
        },
        {
            "name": "Faricy Boys Chrysler Jeep", 
            "address": "4950 New Car Drive, Colorado Springs, CO, 80918",
            "contact": "Harrison",
            "imagesrc": "~/images/faricylogo.png", 
            "email": " ", 
            "phone": "(719)636-1333",
            "phone2": " ",
            "url": "https://www.faricy.com/",
            "bio": "For over 75 years, The Faricy Boys has served Colorado with integrity, loyalty & love — striving to make buying a new car as enjoyable and exciting as getting a new car. Whether you are shopping the best new Jeep and Chrysler selection in southern Colorado or our wide variety of used vehicles with no haggle pricing, you’ll see why starting with us is the easiest way to get behind the wheel of your next car. Additionally, you’ll find our parts and service team to be knowledgeable, friendly and focused on your needs first."
        },
        {
            "name": "Acme Fire and Safety", 
            "address": "1419 S. Wahsatch Avenue, Colorado Springs, CO, 80905",
            "contact": " ",
            "imagesrc": "~/images/Acme.png", 
            "email": " ", 
            "phone": "(719)473-2259",
            "phone2": " ",
            "url": "http://acmefireandsafetyinc.com/",
            "bio": "Since 1955, Acme Fire & Safety Equipment Co. Inc. has been providing reliable fire safety options for residents and businesses in the Southeast Colorado area."
        },
        {
            "name": "Best West Tire and Service, Inc.", 
            "address": "3287 S. Academy Blvd, Colorado Springs, CO, 80916",
            "contact": " ",
            "imagesrc": "~/images/bestwest.png", 
            "email": " ", 
            "phone": "(719)390-9455",
            "phone2": " ",
            "url": "http://www.bestwesttireinc.com/",
            "bio": "We are your local independent Goodyear dealer! At Best West Tire & Service, we do a lot more than just tire service and sales. Our ASE Certified technicians provide auto repair and maintenance services for cars, trucks, and SUVs. At our three locations in North Colorado Springs, South Colorado Springs, and Sterling, you will find a team of experienced technicians ready to meet all of your tire service and auto repair needs. In fact, we offer a 2 year/24,000 mile warranty on parts and labor through Goodyear, so you can rest assured your vehicle has received top quality service."
        },
        {
            "name": "Predator 4WD", 
            "address": "4620 N. Nevada Ave, Colorado Springs, CO, 80907",
            "contact": " ",
            "imagesrc": "~/images/predator.jpg", 
            "email": " ", 
            "phone": "(719)528-5790",
            "phone2": " ",
            "url": "http://predator4wd.com/",
            "bio": "We serve our 4-wheel drive enthusiasts and make new ones by our quality of work. Whether it’s for business, every day travel or just for fun, we’ve got the experts to service your 4-wheel drive vehicle. One thing will always remain constant — to make sure your vehicle is safe and will get you to and from your destination. So whether you’re climbing a hill, kicking up dirt, splashing through rivers, or traveling city streets, we want you to have fun and enjoy the ride.  We’re a full service shop specializing in 4-wheel drive vehicles. We are Blue Seal ASE Certified, the highest ASE Certification available to service repair shops. We are a member of the Better Business Bureau. We have knowledgeable experienced counter staff to assist with purchasing decisions. We pride ourselves on our service excellence and customer care. We’re happy to provide service estimates. We provide quality 4x4 products at competitive pricing. Come visit our showroom. Our website contains only a small percentage of the products we stock. Some sale items listed on the website may not be advertised in the store so take a minute to look around and don't hesitate to contact us with any questions. A portion of every purchase goes to keeping 4 wheel drive trails open and opening new trails."
        },
        {
            "name": "Patriot 4X4", 
            "address": " ",
            "contact": "Kris",
            "imagesrc": "~/images/patriot.jpg", 
            "email": " ", 
            "phone": "(719)684-5025",
            "phone2": " ",
            "url": "https://patriot4x4.business.site/",
            "bio": "Auto Repair Shop in Colorado Springs - Specializing in 4X4 repairs"
        },
        {
            "name": "Sportsman's Warehouse", 
            "address": "555 N. Chelton Road, Colorado Springs, CO, 80909",
            "contact": " ",
            "imagesrc": "~/images/sportsmans-warehouse.png", 
            "email": " ", 
            "phone": "(719)597-9200",
            "phone2": " ",
            "url": "https://www.sportsmanswarehouse.com/",
            "bio": "Whether your passion is hunting, fishing, camping, backpacking or shooting, it's important to have the right equipment when you head into the great outdoors. Quality gear gives you the edge you need to perform well and enjoy the journey. That's why Sportsman's Warehouse carries only top-quality, brand-name products for the serious outdoor enthusiast."
        },
        {
            "name": "FunTreks Guidebooks", 
            "address": "P.O. Box 3127, Colorado Springs, CO, 80132",
            "contact": " ",
            "imagesrc": "~/images/funtreks.jpg", 
            "email": " ", 
            "phone": "(719)390-9455",
            "phone2": " ",
            "url": "https://funtreks.com/",
            "bio": "There’s a whole lot of world out there waiting to be explored. We’ll equip you with all the information you need – difficulty levels, detailed directions, high-quality photos, and guidebooks to get you off-road and out of the mental grind. After all, your free time should be spent exactly like that – free."
        },
        {
            "name": "Rock Ware Welding and Fabrication", 
            "address": "6050 Stetson Hills Blvd, Colorado Springs, CO, 80923",
            "contact": " ",
            "imagesrc": "~/images/rockware.jpg", 
            "email": " ", 
            "phone": "(719)328-0796",
            "phone2": " ",
            "url": "http://www.rockware.net/",
            "bio": "Rock Ware Custom Welding and Fabrication is your full service off road vehicle Repair, Service & Custom Accessories Facility. Rock Ware specializes in off-road accessories for Land Rovers including the Defender 90, 110, Range Rover Classic, and Discovery, as well as Custom Fabrication for all 4x4 models. Additionally Rock Ware builds custom vehicles that meet the needs of the off road community from the family recreational rigs to turn key rockcrawlers. Rock Ware is located in Colorado Springs, Colorado and is dedicated to quality and customer service!"
        },
        {
            "name": "Colorado's Finest Window Well Covers", 
            "address": " ",
            "contact": "Ward or Jennifer Williams",
            "imagesrc": "~/images/cww.jpg", 
            "email": "coloradowindowwells@gmail.com", 
            "phone": "(719)522-2485",
            "phone2": " ",
            "url": "http://coloradowindowwells.com/",
            "bio": "Serving the greater Colorado Springs area, we have window well covers that are designed to help keep out Rain, Snow, Hail, Intruders, Debris, Pets, Childredn our covers are matenance free, lightweight, egress safe and UV protected.  They are made from ploycarbonate and aluminum materials.  Transparent cover allows light in.  Security brackets at NO EXTRA CHARGE.  Tested to hold up to 350 lbs.  Custom made at your home."
        },
        {
            "name": "Land Rover of Colorado Springs", 
            "address": "565 Automotive Drive, Colorado Springs, CO, 80905",
            "contact": " ",
            "imagesrc": "~/images/landrover.png", 
            "email": " ", 
            "phone": "(719)302-1000",
            "phone2": " ",
            "url": "https://www.rednoland.com/",
            "bio": "Land Rover vehicles are prestigious, luxury SUVs, and we want you to have an equally great experience when you visit Land Rover Colorado Springs. We believe in putting Castle Rock, Pueblo, and Colorado Spring, Colorado customers first and the sale second. Our goal is to build reputations for life."
        },
        {
            "name": "Discount Tire", 
            "address": "770 Abbott Lane, Colorado Springs, CO, 80906",
            "contact": " ",
            "imagesrc": "~/images/discounttire.jpg", 
            "email": " ", 
            "phone": "(719)520-0694",
            "phone2": " ",
            "url": "https://www.discounttire.com/store/co/colorado-springs/s/1430",
            "bio": "With the most reliable tire and wheel services around, the local Discount Tire store in Colorado springs, CO can help you make the right decisions for your vehicle."
        },
        {
            "name": "Barron Land", 
            "address": "2790 North Academy Blvd, Suite 311, Colorado Springs, CO, 80917",
            "contact": " ",
            "imagesrc": "~/images/barronland.png", 
            "email": " ", 
            "phone": "(719)360-6827",
            "phone2": " ",
            "url": "http://barronland.com/",
            "bio": "Professional Land Surveying serving the Rocky Mountain Region.  Whether your project is private or commercial, we are here for you surveying needs."
        },
        {
            "name": "Walmart",
            "address": "707 S. 8th Street, Colorado Springs, CO, 80905",
            "contact": " ",
            "imagesrc": "~/images/walmart.jpg", 
            "email": " ", 
            "phone": "(719)633-0736",
            "phone2": " ",
            "url": "https://www.walmart.com/",
            "bio": "Innovative thinking. Leadership through service. And above all, an unwavering commitment to saving people money. It’s what makes us the business we are today, and shapes the company we will be tomorrow. As the largest retailer in the world, our 2.3 million associates meet the needs of more than 260 million customers every week. And we do it wherever they shop – in our stores, online, or through their mobile devices. Sound like a lot of work? We’re just getting started"
        },
        {
            "name": "Set Them Free", 
            "address": "",
            "contact": "Gianni and Betsy Vecchiaretti",
            "imagesrc": "~/images/stfoffroad.png", 
            "email": " ", 
            "phone": "(303)619-4804",
            "phone2": " ",
            "url": "https://www.stfoffroad.com/",
            "bio": "We exist with the goal of ending human trafficking globally. Our purpose is to raise money for those rescuing and rehabilitating the victims of human trafficking as well changing culture and laws around the world. Proceeds of Set Them Free Off Road supports the rescue and rehabilitation of human trafficking victims."
        },
        {
            "name": "O'Reilly Auto Parts", 
            "address": "7545 McLaughlin Road, Falcon, CO, 80831",
            "contact": "Ryan Bauman",
            "imagesrc": "~/images/oreilly.jpg", 
            "email": " ", 
            "phone": " ",
            "phone2": " ",
            "url": "https://locations.oreillyauto.com/co/peyton/autoparts-3666.html",
            "bio": "Your Peyton, CO O'Reilly Auto Parts store is one of over 5,000 O’Reilly Auto Parts stores throughout the U.S. We carry all the parts, tools and accessories you need, as well as offering free Store Services like battery testing, wiper blade & bulb installation, check engine light testing and more. Need help? Stop by and talk to one of our Parts Professionals today."
        },
        {
            "name": "Colorado Compressed Gases", 
            "address": "3975 Interpark Drive, Colorado Springs, CO, 80907",
            "contact": " ",
            "imagesrc": "~/images/ccglogo.jpg", 
            "email": " ", 
            "phone": "(719)473-7714",
            "phone2": " ",
            "url": "http://www.coloradocompressedgases.com/",
            "bio": "Colorado Compressed Gases in Colorado is a local, family owned and operated welding supply shop with more than 75 years of experience and knowledge in the industry. We're you one stop shop for all of your welding needs and questions."
        },
        {
            "name": "Dan's Auto",   
            "address": "3210 Chelton Circle, Colorado Springs, CO, 80908",
            "contact": " ",
            "imagesrc": "~/images/dansauto.jpg", 
            "email": " ", 
            "phone": "(719)635-2587",
            "phone2": " ",
            "url": "https://www.facebook.com/Dans-Auto-Inc-469195729957833/",
            "bio": "A local, family owned provider of tune-ups and general repairs."
        },
        {
            "name": "Outlaw Jeep Adventures", 
            "address": "281 North Main Street, Moab, Utah, 84532",
            "contact": "Jeremy Rowan",
            "imagesrc": "~/images/outlaw.jpg", 
            "email": " ", 
            "phone": "(435)260-7451",
            "phone2": " ",
            "url": "http://www.outlawjeeptours.com/",
            "bio": "When we started our offroad tour business in Moab, we wanted to do something different. We didn't want to have the 'run of the mill' tour business. We wanted to bring some excitement to our guests.  Over the past few years, we've worked hard to set ourselves apart from our competition. By offering ride-along, drive-along and guided tours, we've become your one-stop shop for jeep adventures in Moab. By branching out into different areas of the offroad community, we have been very fortunate and have guided for several TV shows and have done a lot of testing for vehicle manufacturing companies, including Jeep themselves. Our family is looking very forward to the future and being a part of your family's unforgettable vacation here in Moab!."
        },
        {
            "name": "Warn Industries", 
            "address": "12900 SE Capps Road, Clackamas, OR, 97015",
            "contact": "Anne Snedecor",
            "imagesrc": "~/images/warn.jpg", 
            "email": " ", 
            "phone": "(800)542-9276",
            "phone2": " ",
            "url": "https://warn.com/",
            "bio": "The company designs, manufactures and markets a full line of off-road equipment and accessories that enhance the performance of four-wheel-drive vehicles, ATV's and utility vehicles. The company's Industrial Division markets electric and hydraulic winches and hoists to commercial, industrial and severe duty customers. Warn also has a line of utility winches and hoists that are designed for professional trade workers and do-it-yourself consumers who need powerful tools to assist them in pulling, hauling, dragging or lifting. Warn focuses on three specific markets - Consumer Aftermarket, Industrial/Commercial, and Original Equipment. With customers in over 65 countries, WARN is one of the world's most recognized brands in vehicle performance enhancing equipment."
        },
        {
            "name": "Quadratec", 
            "address": "1028 Saunders Lane, West Chester, PA, 19380",
            "contact": " ",
            "imagesrc": "~/images/quadratec.png", 
            "email": " ", 
            "phone": "(800)745-6037",
            "phone2": " ",
            "url": "https://www.quadratec.com/",
            "bio": "For over 25 years, Quadratec has proudly provided Jeep enthusiasts the best parts and accessories available. Our company was founded on one principle: Provide the highest level of service and top quality products to all our customers - every day. Whether it is hood parts or tailgate accessories; Antenna kits or light bars, you can count on our experience to help select the perfect parts or accessories for your daily and off-road needs. Experience The Quadratec Advantage today!"
        },
        {
            "name": "Stargazers Theatre and Event Center", 
            "address": "10 Parkside Drive, Colorado Springs, CO, 80915",
            "contact": " ",
            "imagesrc": "~/images/stargazers.png", 
            "email": " ", 
            "phone": "(719)476-2200",
            "phone2": " ",
            "url": "http://www.stargazerstheatre.com/",
            "bio": "Our Mission is to Bring Great Entertainment to Great Audiences and to be a Warm and Welcoming Gathering Place for the Community!"
        },
        {
            "name": "Metalcloak", 
            "address": "2484 Mercantile Drive, Rancho Cordova, CA, 95742",
            "contact": " ",
            "imagesrc": "~/images/metalcloak.jpg", 
            "email": " ", 
            "phone": "(916)631-8071",
            "phone2": " ",
            "url": "http://www.metalcloak.com/Default.asp",
            "bio": "Whether it's our Game-Changing approach to Product Design, our development of the first Bolt-On High-Clearance Production Fenders, our Lifetime Customer Service policy, or our Patented Game-Changing Suspension Technology, everything we do is only worth doing if we can not only do it better, but significantly different then what others expect."
        },
        {
            "name": "Bestop", 
            "address": "333 Centennial Parkway, Suite B, Louisville, CO  80027",
            "contact": " ",
            "imagesrc": "~/images/bestop-logo.jpg", 
            "email": " ", 
            "phone": "(800)845-3567",
            "phone2": " ",
            "url": "https://www.bestop.com/",
            "bio": "Bestop has been a leader in Jeep and Truck accessories for more than 60 years. Our selection of products comes from years of creating specialty products for outdoor adventures with your vehicle."
        }

                ]
*/
            };
        },

        methods: {

            onItemTap(args) {
                const view = args.view;
                const page = view.page;
                const tappedItem = view.bindingContext;
                //console.log("sponsor tapped");
                this.$showModal(SponsorDetails, {
                    props: {
                        context: tappedItem,
                        animated: true,
                        transition: {
                            "name": "slide",
                            duration: 200,
                            curve: "ease"
                        }
                    }
                });
            },
            onAboutTap() {
                //console.log("Button was pressed");
                this.$showModal(AboutSponsors);
            },


        },

        mounted: function() {
            axios({ method: "GET", "url": "http://data.csc4w.com/sponsors.json" })
            .then(result => {
                this.sponsors = result.data.sponsors;
                //console.log("result is " + JSON.stringify(result.data.sponsors));

            }, error => {
                console.error(error);
            })
        }

}   


</script>
<style scoped>

</style>
