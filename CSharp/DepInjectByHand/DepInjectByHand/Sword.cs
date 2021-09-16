﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DepInjectByHand
{
    public class Sword: IWeapon
    {
        public void Hit(string target)
        {
            Console.WriteLine($"Chopped {target} clean in half.");
        }
    }
}
