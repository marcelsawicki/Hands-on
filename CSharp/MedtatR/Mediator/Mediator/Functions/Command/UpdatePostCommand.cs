﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mediator.Models;
using MediatR;

namespace Mediator.Functions.Command
{
    public class UpdatePostCommand: IRequest
    {
       public int PostId { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }

        public DateTime Date { get; set; }
        public string Description { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public string ImageUrl { get; set; }
        public string Url { get; set; }
        public int Rate { get; set; }
    }
}
