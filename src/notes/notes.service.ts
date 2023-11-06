import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import * as AWS from 'aws-sdk';
import { Note } from 'aws-sdk/clients/ioteventsdata';
import { json } from 'stream/consumers';

@Injectable()
export class NotesService {

    private readonly client: AWS.DynamoDB.DocumentClient;

constructor(){
  this.client = new AWS.DynamoDB.DocumentClient({
    region:'ap-southeast-1',
    accessKeyId:'AKIASBCASOPK2LTRABOI',
    secretAccessKey: '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',
  });
}


  create(createNoteDto: CreateNoteDto) {


    return 'This action adds a new note';
  }

  findAll() {

    const result: Note[] =[]

    //this.client.scan
    // const command {
    //   TableName : 'notes',
    // };

    //var dynamoClient = new AWS.DynamoDB.DocumentClient();
  var params = {
    TableName: "Test", // give it your table name 
    Select: "ALL_ATTRIBUTES"
  };

  this.client.scan(params, function(err, data) {
    if (err) {
       console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
       return "Unable to read item. Error JSON";
    } else {
       //console.log("GetItem succeeded:", JSON.stringify(data, null, 2));

       console.log(data);
       return JSON.stringify(data);
    }
  });

    
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
