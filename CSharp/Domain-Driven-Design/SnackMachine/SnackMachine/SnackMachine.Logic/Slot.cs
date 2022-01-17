﻿using SnackMachine.Logic;
using SnackMachineApp.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SnackMachineApp.Logic
{
    public class Slot : Entity
    {
        public virtual Snack Snack { get; protected set; }
        public virtual int Quantity { get; protected set; }
        public virtual decimal Price { get; protected set; }
        public virtual SnackMachine SnackMachine { get; protected set; }
        public virtual int Position { get; protected set; }

        public Slot()
        {
        }

        public Slot(SnackMachine snackMachine, int position, Snack snack, int quantity, decimal price) : this()
        {
            SnackMachine = snackMachine;
            Position = position;
            Snack = snack;
            Quantity = quantity;
            Price = price;
        }
    }
}
