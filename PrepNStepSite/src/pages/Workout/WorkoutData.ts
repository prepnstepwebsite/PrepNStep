// WorkoutData.ts

import trainer1 from "../../assets/trainers/trainerRyan.jpg"
import trainer2 from "../../assets/trainers/trainerMichael.jpg"
import trainer3 from "../../assets/trainers/trainerMarcus.jpg"
import trainer4 from "../../assets/trainers/trainerFiona.jpg"

interface TrainerClass {
  title: string;
  description: string;
  time: string;
  duration: string;
}

interface TrainerSchedule {
  [day: string]: TrainerClass[];
}

interface Trainer {
  name: string;
  profilePic: string;
  bio: string;
  schedule: TrainerSchedule;
}

const TrainerDays: Trainer[] = [
  {
    name: "Ryan Gonzalez",
    profilePic: trainer1,
    bio: "Certified personal trainer with over 10 years of experience in helping clients achieve their fitness goals. Specializing in strength training and endurance coaching, brining high energy and motivation to every session.",
    schedule: {
      Monday: [
        {
          title: "Morning Yoga",
          description:
            "Start your day with a relaxing yoga session to improve flexibility and calm your mind.",
          time: "6:00 AM",
          duration: "1 hour",
        },
        {
          title: "Total Body Workout",
          description:
            "A full-body workout to tone your muscles and improve cardiovascular health.",
          time: "5:00 PM",
          duration: "1 hour",
        },
      ],
      Tuesday: [
        {
          title: "Cardio Kickboxing",
          description:
            "An energetic class that combines martial arts techniques with fast-paced cardio.",
          time: "7:00 AM",
          duration: "45 minutes",
        },
        {
          title: "Pilates Core",
          description:
            "Strengthen your core with these Pilates exercises that are sure to challenge.",
          time: "6:00 PM",
          duration: "1 hour",
        },
      ],
      Wednesday: [
        {
          title: "HIIT Circuit",
          description:
            "High-Intensity Interval Training to boost your metabolism and burn calories.",
          time: "6:30 AM",
          duration: "30 minutes",
        },
        {
          title: "Power Lifting",
          description:
            "Learn proper techniques and build strength in this power lifting session.",
          time: "7:00 PM",
          duration: "1 hour",
        },
      ],
      Thursday: [
        {
          title: "Morning Yoga",
          description:
            "Start your day with a relaxing yoga session to improve flexibility and calm your mind.",
          time: "6:00 AM",
          duration: "1 hour",
        },
        {
          title: "Total Body Workout",
          description:
            "A full-body workout to tone your muscles and improve cardiovascular health.",
          time: "5:00 PM",
          duration: "1 hour",
        },
      ],
      Friday: [
        {
          title: "Cardio Kickboxing",
          description:
            "An energetic class that combines martial arts techniques with fast-paced cardio.",
          time: "7:00 AM",
          duration: "45 minutes",
        },
        {
          title: "Pilates Core",
          description:
            "Strengthen your core with these Pilates exercises that are sure to challenge.",
          time: "6:00 PM",
          duration: "1 hour",
        },
      ],
      Saturday: [
        {
          title: "HIIT Circuit",
          description:
            "High-Intensity Interval Training to boost your metabolism and burn calories.",
          time: "6:30 AM",
          duration: "30 minutes",
        },
        {
          title: "Power Lifting",
          description:
            "Learn proper techniques and build strength in this power lifting session.",
          time: "7:00 PM",
          duration: "1 hour",
        },
      ],
      Sunday: [
        {
          title: "Morning Yoga",
          description:
            "Start your day with a relaxing yoga session to improve flexibility and calm your mind.",
          time: "6:00 AM",
          duration: "1 hour",
        },
        {
          title: "Total Body Workout",
          description:
            "A full-body workout to tone your muscles and improve cardiovascular health.",
          time: "5:00 PM",
          duration: "1 hour",
        },
      ],
    },
  },
  {
    name: "Fiona Li",
    profilePic: trainer4,
    bio: "A dynamic fitness instructor specializing in high-energy workouts and holistic wellness. Her philosophy revolves around creating a positive, motivational environment where all fitness levels are welcomed and supported.",
    schedule: {
      Monday: [
        {
          title: "Cycling Sprint",
          description:
            "Pedal through hills and sprints in this challenging cycling class.",
          time: "6:00 AM",
          duration: "45 minutes",
        },
        {
          title: "Mindful Yoga",
          description:
            "Connect breath with movement in this mindful yoga class to enhance flexibility and balance.",
          time: "7:30 PM",
          duration: "1 hour",
        },
      ],
      Tuesday: [
        {
          title: "Kettlebell Burn",
          description:
            "A full-body workout using kettlebells to improve strength and endurance.",
          time: "12:00 PM",
          duration: "45 minutes",
        },
        {
          title: "Zumba Fitness",
          description:
            "Dance your way to fitness with this high-energy, fun-filled Zumba class.",
          time: "6:30 PM",
          duration: "1 hour",
        },
      ],
      Wednesday: [
        {
          title: "Bootcamp Challenge",
          description:
            "Test your limits with a mix of cardio and strength training in this boot camp style class.",
          time: "5:30 AM",
          duration: "1 hour",
        },
        {
          title: "Post-Work Pilates",
          description:
            "Wind down after work with a Pilates class focused on core strength and flexibility.",
          time: "6:45 PM",
          duration: "1 hour",
        },
      ],
      Thursday: [
        {
          title: "Cycling Sprint",
          description:
            "Pedal through hills and sprints in this challenging cycling class.",
          time: "6:00 AM",
          duration: "45 minutes",
        },
        {
          title: "Mindful Yoga",
          description:
            "Connect breath with movement in this mindful yoga class to enhance flexibility and balance.",
          time: "7:30 PM",
          duration: "1 hour",
        },
      ],
      Friday: [
        {
          title: "Kettlebell Burn",
          description:
            "A full-body workout using kettlebells to improve strength and endurance.",
          time: "12:00 PM",
          duration: "45 minutes",
        },
        {
          title: "Zumba Fitness",
          description:
            "Dance your way to fitness with this high-energy, fun-filled Zumba class.",
          time: "6:30 PM",
          duration: "1 hour",
        },
      ],
      Saturday: [
        {
          title: "Bootcamp Challenge",
          description:
            "Test your limits with a mix of cardio and strength training in this boot camp style class.",
          time: "5:30 AM",
          duration: "1 hour",
        },
        {
          title: "Post-Work Pilates",
          description:
            "Wind down after work with a Pilates class focused on core strength and flexibility.",
          time: "6:45 PM",
          duration: "1 hour",
        },
      ],
      Sunday: [
        {
          title: "Cycling Sprint",
          description:
            "Pedal through hills and sprints in this challenging cycling class.",
          time: "6:00 AM",
          duration: "45 minutes",
        },
        {
          title: "Mindful Yoga",
          description:
            "Connect breath with movement in this mindful yoga class to enhance flexibility and balance.",
          time: "7:30 PM",
          duration: "1 hour",
        },
      ],
    },
  },
  {
    name: "Marcus Reed",
    profilePic: trainer3,
    bio: "An elite performance coach known for his innovative approach to high-intensity interval training. He combines the latest in sports science with traditional strength training to help athletes and fitness enthusiasts alike surpass their goals and his.",
    schedule: {
      Monday: [
        {
          title: "Iron Circuit",
          description:
            "Experience a circuit training session that focuses on strength, power, and resilience.",
          time: "9:00 AM",
          duration: "1 hour",
        },
        {
          title: "Speed and Agility",
          description:
            "Improve your reaction time and agility with this fast-paced class designed for all levels.",
          time: "6:00 PM",
          duration: "1 hour",
        },
      ],
      Tuesday: [
        {
          title: "Functional Fitness",
          description:
            "Engage in practical exercises that enhance your daily movement and overall fitness.",
          time: "7:00 AM",
          duration: "45 minutes",
        },
        {
          title: "Core Blast",
          description:
            "Target your abs with a series of intense core workouts that will challenge your stability and endurance.",
          time: "8:00 PM",
          duration: "30 minutes",
        },
      ],
      Wednesday: [
        {
          title: "Athletic Yoga",
          description:
            "Combine traditional yoga with athletic drills for improved mobility and strength.",
          time: "10:00 AM",
          duration: "1 hour",
        },
        {
          title: "Evening Rowing",
          description:
            "Unleash your power with indoor rowing sessions that boost cardiovascular fitness and muscle tone.",
          time: "7:30 PM",
          duration: "1 hour",
        },
      ],
      Thursday: [
        {
          title: "Iron Circuit",
          description:
            "Experience a circuit training session that focuses on strength, power, and resilience.",
          time: "9:00 AM",
          duration: "1 hour",
        },
        {
          title: "Speed and Agility",
          description:
            "Improve your reaction time and agility with this fast-paced class designed for all levels.",
          time: "6:00 PM",
          duration: "1 hour",
        },
      ],
      Friday: [
        {
          title: "Functional Fitness",
          description:
            "Engage in practical exercises that enhance your daily movement and overall fitness.",
          time: "7:00 AM",
          duration: "45 minutes",
        },
        {
          title: "Core Blast",
          description:
            "Target your abs with a series of intense core workouts that will challenge your stability and endurance.",
          time: "8:00 PM",
          duration: "30 minutes",
        },
      ],
      Saturday: [
        {
          title: "Athletic Yoga",
          description:
            "Combine traditional yoga with athletic drills for improved mobility and strength.",
          time: "10:00 AM",
          duration: "1 hour",
        },
        {
          title: "Evening Rowing",
          description:
            "Unleash your power with indoor rowing sessions that boost cardiovascular fitness and muscle tone.",
          time: "7:30 PM",
          duration: "1 hour",
        },
      ],
      Sunday: [
        {
          title: "Iron Circuit",
          description:
            "Experience a circuit training session that focuses on strength, power, and resilience.",
          time: "9:00 AM",
          duration: "1 hour",
        },
        {
          title: "Speed and Agility",
          description:
            "Improve your reaction time and agility with this fast-paced class designed for all levels.",
          time: "6:00 PM",
          duration: "1 hour",
        },
      ],
    },
  },
  {
    name: "Michael Joans",
    profilePic: trainer2,
    bio: "Passion for functional fitness and nutrition, emphasizing the importance of mental and physical balance, he ensures his clients achieve sustainable health results. With a commitment to personalized guidance, he empowers individuals to reach their full potential.",
    schedule: {
      Monday: [
        {
          title: "Sunrise Stretch",
          description:
            "Wake up your body with gentle stretches that prepare you for the day ahead.",
          time: "5:30 AM",
          duration: "30 minutes",
        },
        {
          title: "Evening Meditation",
          description:
            "Unwind with guided meditation and light yoga to end your day peacefully.",
          time: "8:00 PM",
          duration: "45 minutes",
        },
      ],
      Tuesday: [
        {
          title: "Aerobic Dance",
          description:
            "Get your heart rate up with fun dance routines that will leave you feeling energized.",
          time: "10:00 AM",
          duration: "1 hour",
        },
        {
          title: "Strength and Conditioning",
          description: "Build muscle and endurance with this intense workout.",
          time: "6:00 PM",
          duration: "1 hour",
        },
      ],
      Wednesday: [
        {
          title: "Midweek Mobility",
          description:
            "Focus on increasing your range of motion and reducing muscle stiffness.",
          time: "7:00 AM",
          duration: "1 hour",
        },
        {
          title: "Box Fit",
          description:
            "Challenge yourself with a boxing-inspired fitness class that emphasizes technique and stamina.",
          time: "5:00 PM",
          duration: "1 hour",
        },
      ],
      Thursday: [
        {
          title: "Sunrise Stretch",
          description:
            "Wake up your body with gentle stretches that prepare you for the day ahead.",
          time: "5:30 AM",
          duration: "30 minutes",
        },
        {
          title: "Evening Meditation",
          description:
            "Unwind with guided meditation and light yoga to end your day peacefully.",
          time: "8:00 PM",
          duration: "45 minutes",
        },
      ],
      Friday: [
        {
          title: "Aerobic Dance",
          description:
            "Get your heart rate up with fun dance routines that will leave you feeling energized.",
          time: "10:00 AM",
          duration: "1 hour",
        },
        {
          title: "Strength and Conditioning",
          description: "Build muscle and endurance with this intense workout.",
          time: "6:00 PM",
          duration: "1 hour",
        },
      ],
      Saturday: [
        {
          title: "Midweek Mobility",
          description:
            "Focus on increasing your range of motion and reducing muscle stiffness.",
          time: "7:00 AM",
          duration: "1 hour",
        },
        {
          title: "Box Fit",
          description:
            "Challenge yourself with a boxing-inspired fitness class that emphasizes technique and stamina.",
          time: "5:00 PM",
          duration: "1 hour",
        },
      ],
      Sunday: [
        {
          title: "Sunrise Stretch",
          description:
            "Wake up your body with gentle stretches that prepare you for the day ahead.",
          time: "5:30 AM",
          duration: "30 minutes",
        },
        {
          title: "Evening Meditation",
          description:
            "Unwind with guided meditation and light yoga to end your day peacefully.",
          time: "8:00 PM",
          duration: "45 minutes",
        },
      ],
    },
  },
];

export default TrainerDays;
