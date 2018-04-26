import { MessageEntity } from "./model";

class GitHubAPI {
getListOfMembers(): Promise<Array<MessageEntity>> {
    return fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response)
      .then((response) => {return Promise.resolve(this.mapGitHubMembersToMemberEntityCollection(response))})
      .catch((error) => this.throwError(error))
    );
}

getListOfMembersSpecified(idNumber: number): Promise<MessageEntity> {
  return fetch("http://jsonplaceholder.typicode.com/posts/"+idNumber.toString())
    .then((response) => this.checkStatus(response))
    .then((response) => this.parseJSON(response)
    .then((response) => {return Promise.resolve(this.mapGitHubMembersToMemberEntityCollectionSpecified(response))})
    .catch((error) => this.throwError(error))
  );
}

getListOfMembersByUserId(userNumber: number): Promise<Array<MessageEntity>> {
  return fetch("http://jsonplaceholder.typicode.com/posts?userId="+userNumber.toString())
    .then((response) => this.checkStatus(response))
    .then((response) => this.parseJSON(response)
    .then((response) => {return Promise.resolve(this.mapGitHubMembersToMemberEntityCollection(response))})
    .catch((error) => this.throwError(error))
  );
}

private checkStatus(response : Response): Promise<Response> {
     if (response.status >= 200 && response.status < 300) {
       return Promise.resolve(response);
     } else {
       let error = new Error(response.statusText);
       throw error;
     }
 }

  private parseJSON(response : Response): Promise<Response> {
      return response.json();
  }

  private mapGitHubMembersToMemberEntityCollection(data)
  {
    let members : Array<MessageEntity>;

    members = data.map((gitHubMember) => {
      let member : MessageEntity = new MessageEntity(gitHubMember);
      return member;
    });

    return members;
  }

  private mapGitHubMembersToMemberEntityCollectionSpecified(data)
  {
    let members : Array<MessageEntity>;
    let member : MessageEntity = new MessageEntity(data);

    return member;
  }


  private throwError(error){
    document.write("<p>Ops! something wrong! We are so embarrased..</p>");
    console.log(error);
    return Promise.reject(error);
  }
}

export const gitHubAPI = new GitHubAPI();