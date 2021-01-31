# videoSync

Web application for watching films together.

## Installation

```
npm install
```

## Usage

You have to change ```&parent``` attribute in ```views/movie.pug``` in ```inframe``` element for own domena ([more](https://dev.twitch.tv/docs/embed/chat)).

### AWS storage
  1. Create S3 storage on [AWS](http://aws.amazon.com/) with this policy:
```json
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "AllowPublicRead",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR BUCKET NAME/*"
        }
    ]
}
```
  2. In ```settings.json``` put your ```secretAccessKey``` and ```accessKeyId```

### Local storage
   1. In ```settings.json``` set ```isAWS``` to ```false```
   2. In ```settings.json``` put your ```secretAccessKey``` and ```accessKeyId```
   3. In ```views/movie.pug``` change in video element ``src`` attribute to ```/video```

Start app: 
```    
node server.js 
```

## Host account
You can change password in ```public/js/sync.js```

The username doesn't matter.

## License
[MIT](https://choosealicense.com/licenses/mit/)
