export const content = {
    profile: {
        name: "Gowrishankar M",
        role: "Data Scientist / Data Analyst",
        tagline: "Making Sense of the Void",
        subTagline: "Turning raw, messy startup data into navigable business decisions.",
        email: "gowrishankar1852002@gmail.com",
        linkedin: "https://www.linkedin.com/in/gowrishankar-m-6024a6218",
        github: "https://github.com/gowrishan1805",
        location: "Tamil Nadu, India",
        education: "B.Sc Mathematics (2019–2022)",
        experience: "1 Year (Early-stage startup)"
    },

    rows: [
        {
            title: "Netflix Originals (Flagship Work)",
            id: "flagship",
            items: [
                {
                    id: "churn-prediction",
                    title: "Customer Churn Prediction",
                    desc: "Predicting user exit before it happens.",
                    match: "98% Match",
                    tags: ["Machine Learning", "Python", "Business Impact"],
                    image: "churn", // Placeholder for image logic
                    details: {
                        synopsis: "Identified at-risk customers with 85% recall using Random Forest, saving the startup roughly 15% in potential monthly revenue churn.",
                        role: "End-to-End Data Scientist",
                        problem: "The startup was losing customers but didn't know who or why until they had already left.",
                        dataset: "Raw SQL dumps, inconsistency in timestamps, missing demographic data.",
                        approach: "1. Cleaned data (handled missing values). 2. Feature Engineering (login frequency, support tickets). 3. Logistic Regression baseline -> XGBoost.",
                        whyStack: "XGBoost offered best performance on tabular data; Logistic Regression used for interpretability.",
                        limitations: "Model degrades if user behavior changes drastically (e.g., new feature launch).",
                        impact: "Reduced churn by 8% in Q3 via targeted email campaigns.",
                        github: "https://github.com/gowrishan1805/churn-prediction"
                    }
                },
                {
                    id: "eda-usage",
                    title: "Exploratory Data Analysis: Usage",
                    desc: "Uncovering hidden user patterns.",
                    match: "95% Match",
                    tags: ["EDA", "Visualization", "Strategy"],
                    image: "eda",
                    details: {
                        synopsis: "Deep dive into user interaction logs to find the 'Aha!' moment.",
                        role: "Data Analyst",
                        problem: "Product team assumed users loved Feature A, but data was silent.",
                        dataset: "Clickstream data, very noisy JSON logs.",
                        approach: "Parsed JSON logs using Pandas. Visualize retention curves based on feature usage.",
                        whyStack: "Pandas/Seaborn for rapid iteration.",
                        limitations: "Correlation != Causation. Cannot prove feature usage caused retention.",
                        impact: "Shifted roadmap focus to Feature B, which had 2x higher retention correlation.",
                        github: "https://github.com/gowrishan1805/eda-usage"
                    }
                },
                {
                    id: "sql-analytics",
                    title: "SQL Analytics Project",
                    desc: "Complex queries for real answers.",
                    match: "93% Match",
                    tags: ["SQL", "Reporting", "Dashboarding"],
                    image: "sql",
                    details: {
                        synopsis: "Optimized reporting queries reducing dashboard load time by 40%.",
                        role: "Data Engineer / Analyst",
                        problem: "Executive dashboard took 2 minutes to load.",
                        dataset: "PostgreSQL Production DB.",
                        approach: "Analyzed query plans. Added indices. Rewrote subqueries as CTEs.",
                        whyStack: "Pure SQL is the backbone of data access.",
                        limitations: "Materialized views needed refreshing (lag of 1 hour).",
                        impact: "Daily active monitoring became possible for the CEO.",
                        github: "https://github.com/gowrishan1805/sql-analytics"
                    }
                }
            ]
        },
        {
            title: "Data Science Missions",
            id: "missions",
            items: [
                {
                    id: "logistic-regression",
                    title: "Logistic Regression",
                    desc: "The power of white-box models.",
                    match: "90% Match",
                    tags: ["Modeling", "Interpretability"],
                    details: {
                        synopsis: "Using Logistic Regression to score lead quality.",
                        role: "Data Scientist",
                        problem: "Sales team wasted time on low-intent leads.",
                        dataset: "CRM data.",
                        approach: "Built a lead scoring model. Coefficients explained 'why' a lead was good.",
                        whyStack: "Sales team needed to understand the 'Why', hence Blackbox models were rejected.",
                        limitations: "Linear assumptions might miss complex interactions.",
                        impact: "Sales efficiency +20%.",
                        github: "https://github.com/gowrishan1805/log-reg-leads"
                    }
                },
                {
                    id: "stats-business",
                    title: "Statistics for Business",
                    desc: "A/B Testing and Significance.",
                    match: "88% Match",
                    tags: ["Statistics", "Hypothesis Testing"],
                    details: {
                        synopsis: "Rigorous A/B testing framework setup.",
                        role: "Data Scientist",
                        problem: "Ad-hoc changes were being made without proof.",
                        dataset: "Web traffic data.",
                        approach: "Defined sample sizes, p-values, and power. Ran t-tests.",
                        whyStack: "SciPy.",
                        limitations: "Requires sufficient traffic volume.",
                        impact: "Stopped a redesign that would have hurt conversion by 5%.",
                        github: "https://github.com/gowrishan1805/stats-business"
                    }
                },
                {
                    id: "feature-engineering",
                    title: "Feature Engineering",
                    desc: "Creating value from nothing.",
                    match: "85% Match",
                    tags: ["Data Engineering", "Creativity"],
                    details: {
                        synopsis: "Extracting 'Time Since Last Login' proved more predictive than 'Total Logins'.",
                        role: "Data Scientist",
                        problem: "Model plateaued.",
                        dataset: "Time-series logs.",
                        approach: "Aggregated window functions.",
                        whyStack: "SQL + Pandas.",
                        limitations: "Computationally expensive during ETL.",
                        impact: "Model AUC increased by 0.04.",
                        github: "https://github.com/gowrishan1805/feature-eng"
                    }
                }
            ]
        },
        {
            title: "Experience Timeline",
            id: "timeline",
            items: [
                {
                    id: "black-hole",
                    title: "The Black Hole",
                    desc: "Joining an early stage startup.",
                    match: "2023",
                    tags: ["Career", "Beginning"],
                    details: {
                        synopsis: "Joined as the first data hire. No infrastructure, just raw databases.",
                        role: "Junior Data Scientist",
                        problem: "Data chaos.",
                        dataset: "N/A",
                        approach: "Survived. Organized. Built pipelines.",
                        whyStack: "Grit.",
                        limitations: "Many late nights.",
                        impact: "Laid the foundation for data-driven culture.",
                        github: "https://github.com/gowrishan1805"
                    }
                },
                {
                    id: "controlled-explosion",
                    title: "Controlled Explosion",
                    desc: "Analysis and Growth.",
                    match: "2023-24",
                    tags: ["Growth", "Analysis"],
                    details: {
                        synopsis: "Started delivering regular reports and insights.",
                        role: "Data Scientist",
                        problem: "Scaling reports manually.",
                        dataset: "Growing volume.",
                        approach: "Automated via Python scripts.",
                        whyStack: "Python.",
                        limitations: "Script maintenance.",
                        impact: "Saved 10 hours/week.",
                        github: "https://github.com/gowrishan1805"
                    }
                }
            ]
        },
        {
            title: "Toolstack",
            id: "tools",
            items: [
                { id: "python", title: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", desc: "Native Speaker", match: "High" },
                { id: "sql", title: "SQL", image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", desc: "Fluent", match: "High" },
                { id: "pandas", title: "Pandas/NumPy", desc: "Data Manipulation", match: "High" },
                { id: "scikit", title: "Scikit-Learn", desc: "ML Models", match: "High" },
                { id: "tableau", title: "Tableau/PowerBI", desc: "Visualization", match: "Mid" }
            ]
        },
        {
            title: "Interview Questions",
            id: "faq",
            items: [
                {
                    id: "q-log-reg",
                    title: "Why Logistic Regression?",
                    desc: "Why not a Neural Network?",
                    match: "FAQ",
                    details: {
                        synopsis: "Explainability > Pure Accuracy in early B2B contexts.",
                        role: "Strategic Thinker",
                        problem: "Black box models are hard to sell to non-technical stakeholders.",
                        approach: "Use simpler models to gain trust.",
                        whyStack: "LogReg.",
                        limitations: "Linear boundary.",
                        impact: "Stakeholders trusted the score and used it.",
                        github: ""
                    }
                },
                {
                    id: "q-deep-learning",
                    title: "Why No Deep Learning?",
                    desc: "Right tool for the right job.",
                    match: "FAQ",
                    details: {
                        synopsis: "Tabular data with <100k rows rarely benefits from NN.",
                        role: "Pragmatist",
                        problem: "Over-engineering.",
                        approach: "Focus on feature engineering instead.",
                        whyStack: "Trees/Forests.",
                        limitations: "None really.",
                        impact: "Faster training, cheaper inference.",
                        github: ""
                    }
                }
            ]
        }
    ]
};
