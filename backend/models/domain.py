from enum import Enum

class Animal(str, Enum):
    panda = "panda"
    dinosaur = "dinosaur"
    cat = "cat"
    dog = "dog"
    bunny = "bunny"
    lion = "lion"


class Outfit(str, Enum):
    princess = "princess"
    astronaut = "astronaut"
    firefighter = "firefighter"
    ballet_dancer = "ballet_dancer"
    superhero = "superhero"
    doctor = "doctor"
